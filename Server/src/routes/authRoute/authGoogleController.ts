import passport from "passport";

const googleSignUpController = passport.authenticate('google', {
    scope: ['profile','email']
});

const googleCallBackController = passport.authenticate('google', {
    failureRedirect:"http://localhost:3000/login",
});

export {
    googleCallBackController,
    googleSignUpController
}