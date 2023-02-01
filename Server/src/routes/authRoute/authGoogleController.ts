import passport from "passport";

const googleSignUpController = passport.authenticate('google', {
    scope: ['email']
});

const googleCallBackController = passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login',
});

export {
    googleCallBackController,
    googleSignUpController
}