import { Request, Response } from 'express'

const checkUserAuthController = (req: Request, res: Response) => {
    if (req.isAuthenticated() && req.user) {
        return res
            .status(200)
            .json({ isAuthenticated: true })
    }

    return res
        .status(200)
        .json({ isAuthenticated: false })
}

export default checkUserAuthController