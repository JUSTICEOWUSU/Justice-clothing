import { Request, Response } from 'express';
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import users from '../../database/DBModels/userModel';
config()

const checkUserAuthController = async (req: Request, res: Response) => {
    const jwtSecret = process.env.JWT_KEY as string;
    
    if(req.body.url){
        req.session.url = `${req.body.url}`;
        console.log(req.session.url);
    }
  
      let userExistance:any
      // Retrieving UserData From Database
      if(req.user){
        userExistance = await users.findOne({
        id: req.user
    })
      }
      // Checking If User is Authenticated
      
      if(userExistance && req.isAuthenticated()){
       try {
      // Verify the JWT token and get the decoded information
      const decodeId = jwt.verify(req.body.token, jwtSecret) as {
        id: number;
        iat: number;
        exp: number;
      };

      // Check if the user is authenticated and the decoded ID matches the user's ID
      if (decodeId && req.user === decodeId.id) {
        return res
          .status(200)
          .json({ token: req.body.token, isAuthenticated: true });
      }else{
                return res.json({ isAuthenticated: false });
      }
    } catch (error) {
      const payload = { id: req.user };
      const token = jwt.sign(payload, jwtSecret, { expiresIn: '48hr' });
      return res
        .status(200)
        .json({ token: token, isAuthenticated: true });
    }
      } 
      else{
        return res.json({isAuthenticated:false})
      }
  }

export default checkUserAuthController;
