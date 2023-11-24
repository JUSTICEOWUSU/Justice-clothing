import { Router } from "express";
import { facebookCallBackController, facebookSignUpController } from "./authFacebookController";
import { googleCallBackController, googleSignUpController } from "./authGoogleController";
import checkUserAuthController from "./checkUserController";
import authLogoutController from "./authLogoutController";

const authRouter:Router = Router();

authRouter.get("/facebook", facebookSignUpController);
authRouter.get("/facebook/callback", facebookCallBackController,(req, res) => {

        if (req.session.url) {
          return res.redirect(`${req.session.url}`);
        } else {
          return res.redirect("/");
        }
    
});

authRouter.get("/google", googleSignUpController);

authRouter.get("/google/callback", googleCallBackController, (req, res) => {  

        if(req.session.url){
                return res.redirect(`${req.session.url}`);
        }else{
                return res.redirect("/");
        }
    
});

authRouter.post("/checkUserAuthentication", checkUserAuthController)
authRouter.get("/logout",authLogoutController)

export default authRouter

