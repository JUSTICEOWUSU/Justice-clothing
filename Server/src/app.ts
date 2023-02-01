import path from 'path';
import helmet from 'helmet';
import express from 'express';
import passport from 'passport';
import { config } from 'dotenv';
import session from 'cookie-session';
import Google  from 'passport-google-oauth20';
import Facebook from 'passport-facebook';
import shopRouter from './routes/shopRoute/shopRouter';
import authRouter from './routes/authRoute/authRouter';
import checkoutRouter from './routes/paymentRoute/checkoutRouter';
import categoriesRouter from './routes/categoryRoute/categoriesRoute';
config();

type SessionUser = {
    [index: string]: boolean | number | object | string;
}

const GOOGLE_KEYS = {
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_SECRET_KEY as string,
    callbackURL: 'https://localhost:7000/auth/google/callback',
}

const FACEBOOK_KEYS = {
    clientID: process.env.FACEBOOK_CLIENT_ID as string,
    clientSecret: process.env.FACEBOOK_SECRET_KEY as string,
    callbackURL: 'https://localhost:7000/auth/facebook/callback',
}

const app = express();

// Passport Configuration
passport.use(new Google.Strategy(GOOGLE_KEYS, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    done(null, profile);
}));

passport.use(new Facebook.Strategy(FACEBOOK_KEYS, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    done(null, profile);
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

// App Configuration
app.use(helmet.contentSecurityPolicy({
    directives:{
        imgSrc:["'self'","data:", "*"],
        defaultSrc:["'self'"],
        scriptSrc:["'self'","https://checkout.stripe.com","https://js.stripe.com","https://m.stripe.network"],
    }
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
app.use("/auth",authRouter);

app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
});

export default app;