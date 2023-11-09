import path from 'path';
import cors from 'cors'
import express from 'express';
import passport from 'passport';
import { config } from 'dotenv';
import session from 'cookie-session';
import Google from 'passport-google-oauth20';
import Facebook from 'passport-facebook';
import shopRouter from './src/routes/shopRoute/shopRouter';
import authRouter from './src/routes/authRoute/authRouter';
import checkoutRouter from './src/routes/paymentRoute/checkoutRouter';
import categoriesRouter from './src/routes/categoryRoute/categoriesRoute';
config();
import users from './src/database/DBModels/userModel';

type SessionUser = {
    [index: string]: boolean | number | object | string;
}

const GOOGLE_KEYS = {
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_SECRET_KEY as string,
    callbackURL: 'http://localhost:7000/auth/google/callback',
}

const FACEBOOK_KEYS = {
    clientID: process.env.FACEBOOK_CLIENT_ID as string,
    clientSecret: process.env.FACEBOOK_SECRET_KEY as string,
    callbackURL: 'http://localhost:7000/auth/facebook/callback',
}

const app = express();
app.use(express.static(path.join(__dirname, 'public')));


// PASSPORT CONFIGURATIONS

// REGISTER USER WITH GOOGLE
passport.use(new Google.Strategy(GOOGLE_KEYS, (accessToken, refreshToken, profile, done) => {
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
    return done(null, profile);
}));

// REGISTER USER WITH FACEBOOK
passport.use(new Facebook.Strategy(FACEBOOK_KEYS, (accessToken, refreshToken, profile, done) => {
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
    return done(null, profile);

}));

passport.serializeUser((user, done) => {
    const sessionUser = user as SessionUser
    done(null, sessionUser.id);
});

passport.deserializeUser((user: number, done) => {
    done(null, user);
    console.log(`this is my id: ${user}`);
    return;
});



app.use(cors({
    origin:"*"
}))

app.use(session({
    name: 'session',
    keys: ['secret'],
    maxAge: 1000 * 60 * 60 * 2
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());


app.use('/shopData', shopRouter);
app.use('/categories', categoriesRouter);
app.use('/checkout', checkoutRouter);
app.use('/auth', authRouter);
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



export default app;