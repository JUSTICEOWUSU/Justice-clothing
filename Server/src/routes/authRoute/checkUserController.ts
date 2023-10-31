import { Request, Response } from 'express'
import {JwtPayload} from   'jsonwebtoken'

import jwt from "jsonwebtoken"

const checkUserAuthController = async (req: Request, res: Response) => {
        const jwtSecret: string = "quabinah81";

    const decodeId = jwt.verify(req.body.token,jwtSecret) as { id: number, isAuthenticated: boolean, iat: number, exp: number }

    if (req.isAuthenticated() && req.user || req.user === decodeId.id) {
        const payload = { id: req.user, isAuthenticated: true }
        const token = jwt.sign(payload, jwtSecret, {expiresIn:"24hr"});
        return res
            .status(200)
            .json({ token:token })
    }
        console.log("auth asked")


    res.redirect("/login")
}

export default checkUserAuthController