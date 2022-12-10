import { Router } from "express";
import httpPostSignUp from "./authController";

const authRouter = Router()

authRouter.post("/",httpPostSignUp)

export default authRouter