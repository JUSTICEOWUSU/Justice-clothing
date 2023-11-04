import passport from "passport";

const googleSignUpController = passport.authenticate('google', {
    scope: ['email']
});

const googleCallBackController = passport.authenticate('google', {
    failureRedirect:"/login"
});

export {
    googleCallBackController,
    googleSignUpController
}