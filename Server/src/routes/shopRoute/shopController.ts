import { Request, Response } from "express"
import storeItems from "../../database/DBModels/storeItemsModel"

const httpGetStoreData = async(req:Request,res:Response)=>{
    const storeData = await storeItems.find({},{_id:0,__v:0,'items._id':0,'items.__v':0}).sort({id:1})
    if(!storeData){
        return res
        .status(501)
        .json({error:'server error, please try again'})
    }

    return res
    .status(200)
    .json({categories:storeData})
}

export default httpGetStoreData