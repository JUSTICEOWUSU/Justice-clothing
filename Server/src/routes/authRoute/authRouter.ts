import { Router } from "express";
import { facebookCallBackController, facebookSignUpController } from "./authFacebookController";
import { googleCallBackController, googleSignUpController } from "./authGoogleController";
import checkUserAuthController from "./checkUserController";

const authRouter = Router();

authRouter.get("/facebook", facebookSignUpController);
authRouter.get("/facebook/callback", facebookCallBackController);


authRouter.get("/google", googleSignUpController);
authRouter.get("/google/callback", googleCallBackController);

authRouter.get("/checkUserAuthentication",checkUserAuthController)

export default authRouter

