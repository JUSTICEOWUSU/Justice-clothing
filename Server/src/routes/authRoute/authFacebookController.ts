import passport from "passport";

const facebookSignUpController = passport.authenticate("facebook", {
  scope: ["profile", "email"],
});

const facebookCallBackController = passport.authenticate("facebook", {
  failureRedirect: "https://justice-clothing.vercel.app",
});

export {
    facebookCallBackController,
    facebookSignUpController
}