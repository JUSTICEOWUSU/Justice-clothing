import { Request, Response } from "express";

type RequestBody = {
    name: string;
    amount: number;
    city: string;
    email: string;
}

const httpPostCheckout = async (req: Request, res: Response) => {
    const reqBody: RequestBody = req.body;
    const {name,amount,email} = reqBody;
    console.log(reqBody);
    if(!email || !amount || !name) return (
        res
        .status(505)
        .json("please make sure all fields are filled")
    )

    return res
        .status(200)
        .json(reqBody)
}

export default httpPostCheckout