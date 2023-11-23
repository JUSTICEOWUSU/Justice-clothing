import { Router } from "express";
import httpPostCheckout from "./checkoutController";

const checkoutRouter = Router();

checkoutRouter.post("/",httpPostCheckout);

export default checkoutRouter