import { Request, Response } from "express";

type SignupData = {
    name:string;
    email:string;
    password:string;
}
const httpPostSignUp =async (req:Request,res:Response) => {
    const signUpData:SignupData = req.body;

    const {name,email,password} = signUpData;

    if(!name || !password || !email) return(
        res
        .status(500)
        .json({"error":"you are missing a credential"})
    );

    return(
        res
        .status(201)
        .json({"created":`Hello ${name} your account has been successfully created with email: ${email}`})
    )
}

export default httpPostSignUp