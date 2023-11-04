import { Router } from "express";
import { facebookCallBackController, facebookSignUpController } from "./authFacebookController";
import { googleCallBackController, googleSignUpController } from "./authGoogleController";
import checkUserAuthController from "./checkUserController";

const authRouter = Router();

authRouter.get("/facebook", facebookSignUpController);
authRouter.get("/facebook/callback", facebookCallBackController);

authRouter.get("/google", googleSignUpController);
authRouter.get("/google/callback", googleCallBackController, (req, res) => {

    if (req.session && req.session.url) {
                      return  res.redirect(`${req.session.url}`);
    }
    return res.redirect('/')
    
});

authRouter.post("/checkUserAuthentication",checkUserAuthController)

export default authRouter

