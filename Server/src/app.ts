import path from 'path';
import cors from 'cors'
import express from 'express';
import passport from 'passport';
import { config } from 'dotenv';
import session from 'express-session';
import Google from 'passport-google-oauth20';
import Facebook from 'passport-facebook';
import shopRouter from './routes/shopRoute/shopRouter';
import authRouter from './routes/authRoute/authRouter';
import checkoutRouter from './routes/paymentRoute/checkoutRouter';
import categoriesRouter from './routes/categoryRoute/categoriesRoute';
config();
import users from './database/DBModels/userModel';
import {Request,Response} from 'express'

declare module 'express-session' {
  interface SessionData {
    url?: string;
  }
}

type SessionUser = {
    [index: string]: boolean | number | object | string;
}

const GOOGLE_KEYS:{
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    passReqToCallback: true; // Specify the value explicitly as 'true'
} = {
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_SECRET_KEY as string,
    callbackURL: 'https://justice-clothing.vercel.app/auth/google/callback',
    passReqToCallback: true,

}

const FACEBOOK_KEYS : {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    passReqToCallback: true; // Specify the value explicitly as 'true'
} = {
    clientID: process.env.FACEBOOK_CLIENT_ID as string,
    clientSecret: process.env.FACEBOOK_SECRET_KEY as string,
    callbackURL: 'https://justice-clothing.vercel.app/auth/facebook/callback',
    passReqToCallback: true,
}

const app = express();


// PASSPORT CONFIGURATIONS

// REGISTER USER WITH GOOGLE
passport.use(new Google.Strategy(GOOGLE_KEYS, (req:Request,accessToken:String, refreshToken:String, profile:any, done:any) => {
    const userExist = users.findOne({
        id: profile.id
    })

    if (!userExist) {
        const newUser = new users({
            username: profile.displayName,
            id: profile.id,
            email: profile.emails
        });

        newUser.save((error) => {
            if (error) {
                return done(error.message);
            }
        })
    }
    
     req.logIn(profile, (err) => {
        if (err) {
            return done(err);
        }
        return done(null, profile);
    });
}));

// REGISTER USER WITH FACEBOOK
passport.use(new Facebook.Strategy(FACEBOOK_KEYS, (req:Request,accessToken:String, refreshToken:String, profile:any, done:any) => {
    const userExist = users.findOne({
        id: profile.id
    })

    if (!userExist) {
        const newUser = new users({
            username: profile.displayName,
            id: profile.id,
            email: profile.emails
        });

        newUser.save((error) => {
            if (error) {
                return done(error);
            }
        })
    }

     req.logIn(profile, (err) => {
        if (err) {
            return done(err);
        }
        return done(null, profile);
    });

}));

passport.serializeUser((user, done) => {
    const sessionUser = user as SessionUser
    done(null, sessionUser.id);
});

passport.deserializeUser((user: number, done) => {
    done(null, user);
    return;
});



app.use(cors({
    origin:"*"
}))

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    name: 'session',
     cookie: { maxAge: 1000 * 60 * 60 * 2 },
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());


app.use('/shopData', shopRouter);
app.use('/categories', categoriesRouter);
app.use('/checkout', checkoutRouter);
app.use('/auth', authRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



export default app;