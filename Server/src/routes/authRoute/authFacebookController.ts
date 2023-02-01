import passport from "passport";

const facebookSignUpController = passport.authenticate('facebook', {
    scope: ['email']
});

const facebookCallBackController = passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login',
});

export {
    facebookCallBackController,
    facebookSignUpController
}