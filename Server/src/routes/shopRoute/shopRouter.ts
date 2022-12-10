import {Router} from "express"
import httpGetStoreData from "./shopController";

const shopRouter:Router = Router();

shopRouter.get("/",httpGetStoreData);

export default shopRouter