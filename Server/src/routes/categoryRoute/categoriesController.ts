import { Request, Response } from "express";
import CategoryItems from "../../database/DBModels/categoriesModel";

const httpGetCategories = async(req:Request,res:Response)=>{
    const categoryData = await CategoryItems.find({},{_id:0,__v:0}).sort({id:1})
    if(!categoryData){
        return res
        .status(501)
        .json({error:'server error, please try again'})
    }

    return res
    .status(200)
    .json({categories:categoryData})
}

export default httpGetCategories;