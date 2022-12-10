import { Request, Response } from "express";

const httpGetCategories = async(req:Request,res:Response)=>{
    res
    .status(200)
    .json({categories:"data"})
}

export default httpGetCategories;