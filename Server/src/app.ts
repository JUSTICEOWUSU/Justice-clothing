import express,{Request,Response} from 'express';
import path from 'path';
import passport from 'passport';
import cors from 'cors'
import { config } from 'dotenv';
import session from 'express-session';
import MongoStore from "connect-mongo"
const Google = require('passport-google-oidc');
import Facebook from 'passport-facebook';
import shopRouter from './routes/shopRoute/shopRouter';
import authRouter from './routes/authRoute/authRouter';
import { checkoutRouter } from "./routes/paymentRoute/checkoutRouter";
import categoriesRouter from './routes/categoryRoute/categoriesRoute';
config();
import users from './database/DBModels/userModel';

declare module 'express-session' {
  interface SessionData {
    url?: string;
    passport: any;
    user: any;
  }
}

type SessionUser = {
    [index: string]: boolean | number | object | string;
}

const GOOGLE_KEYS:{
    clientID: string;
    clientSecret: string;
    callbackURL: string;
} = {
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_SECRET_KEY as string,
    callbackURL: 'https://justice-clothing.vercel.app/auth/google/callback',
}

const FACEBOOK_KEYS : {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
} = {
    clientID: process.env.FACEBOOK_CLIENT_ID as string,
    clientSecret: process.env.FACEBOOK_SECRET_KEY as string,
    callbackURL: 'https://justice-clothing.vercel.app/auth/facebook/callback',
}
// PASSPORT CONFIGURATIONS

// REGISTER USER WITH GOOGLE
passport.use(new Google.Strategy(GOOGLE_KEYS, async ( issuer:any,profile:any,cb:any) => {
     try {
        const userExist = await users.findOne({ id: profile.id });
        
        if (!userExist) {
            const newUser = new users({
                username: profile.displayName || profile.username || 'unknown',
                id: profile.id,
                  email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null,
            });

            await newUser.save();
        }

        return cb(null, profile);
    } catch (error) {
        return cb(error);
    }
}));

// REGISTER USER WITH FACEBOOK
passport.use(new Facebook.Strategy(FACEBOOK_KEYS, async (accessToken: string, refreshToken: string, profile:any, done: any) => {
     try {
        const userExist = await users.findOne({ id: profile.id });

        if (!userExist) {
            const newUser = new users({
                username: profile.displayName || profile.username || 'unknown',
                id: profile.id,
                  email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null,
            });

            await newUser.save();
        }

        return done(null, profile);
    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser((user, done) => {
    const sessionUser = user as SessionUser
    done(null, sessionUser.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    done(null, id);
  } catch (error) {
    done(error);
  }
});


const app = express();
app.use(
  cors({
    origin: "https://justice-clothing.vercel.app",
    credentials: true,
  })
);
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    name: 'session',
    store: MongoStore.create({
      mongoUrl: `${process.env.MONGODB_KEY}`, 
      ttl: 14 * 24 * 60 * 60, // = 14 days. Default
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 2 },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use('/shopData', shopRouter);
app.use('/categories', categoriesRouter);
app.use('/checkout', checkoutRouter);
app.use('/auth', authRouter);
app.use(express.static(path.join(__dirname, "public")));
app.get("/*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

export default app;