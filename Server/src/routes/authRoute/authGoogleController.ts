import passport from "passport";

const googleSignUpController = passport.authenticate('google', {
    scope: ['email']
});

const googleCallBackController = passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect:'/'
});

export {
    googleCallBackController,
    googleSignUpController
}