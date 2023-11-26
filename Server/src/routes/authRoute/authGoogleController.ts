import passport from "passport";

const googleSignUpController = passport.authenticate('google', {
    scope: ['profile','email']
});

const googleCallBackController = passport.authenticate("google", {
  failureRedirect: "https://justice-clothing.vercel.app",
});

export {
    googleCallBackController,
    googleSignUpController
}