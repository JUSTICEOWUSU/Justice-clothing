import passport from "passport";

const facebookSignUpController = passport.authenticate("facebook", {
  scope: ["profile", "email"],
});

const facebookCallBackController = passport.authenticate("facebook", {
  failureRedirect: "http://localhost:3000/login",
});

export {
    facebookCallBackController,
    facebookSignUpController
}