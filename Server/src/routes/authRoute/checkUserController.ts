import { Request, Response } from 'express';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config();

const checkUserAuthController = (req: Request, res: Response) => {
  const jwtSecret = process.env.JWT_KEY as string;
  if (req.body.url && req.session) {
    req.session.url = req.body.url
  }
  if (req.user) {
    
    try {
      // Verify the JWT token and get the decoded information
      const decodeId = jwt.verify(req.body.token, jwtSecret) as {
        id: number;
        iat: number;
        exp: number;
      };

      // Check if the user is authenticated and the decoded ID matches the user's ID
      if (req.user && decodeId && req.user === decodeId.id) {
        const payload = { id: req.user };
        const token = jwt.sign(payload, jwtSecret, { expiresIn: '24h' });
        return res
          .status(200)
          .json({ token: token, isAuthenticated: true });
      }
    } catch (error) {
      const payload = { id: req.user };
      const token = jwt.sign(payload, jwtSecret, { expiresIn: '24h' });
      return res
        .status(200)
        .json({ token: token, isAuthenticated: true });

    }
  }

  // If the user is not authenticated or JWT verification failed, redirect to the login page
      return res.json({isAuthenticated:false})

};

export default checkUserAuthController;
