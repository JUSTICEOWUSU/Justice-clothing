import passport from "passport";
import {Request, Response} from 'express'


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