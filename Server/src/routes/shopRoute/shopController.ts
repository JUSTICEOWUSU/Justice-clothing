import { Request, Response } from "express"

const httpGetStoreData = async(req:Request,res:Response)=>{
    res
    .status(200)
    .json({hello:"body"})
}

export default httpGetStoreData