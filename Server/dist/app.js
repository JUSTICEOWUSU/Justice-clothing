"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const Google = require('passport-google-oidc');
const Livereload = require('connect-livereload');
const passport_facebook_1 = __importDefault(require("passport-facebook"));
const shopRouter_1 = __importDefault(require("./routes/shopRoute/shopRouter"));
const authRouter_1 = __importDefault(require("./routes/authRoute/authRouter"));
const checkoutRouter_1 = __importDefault(require("./routes/PaymentRoute/checkoutRouter"));
const categoriesRoute_1 = __importDefault(require("./routes/categoryRoute/categoriesRoute"));
(0, dotenv_1.config)();
const userModel_1 = __importDefault(require("./database/DBModels/userModel"));
const GOOGLE_KEYS = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_KEY,
    callbackURL: 'http://localhost:7000/auth/google/callback',
};
const FACEBOOK_KEYS = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_SECRET_KEY,
    callbackURL: 'http://localhost:7000/auth/facebook/callback',
};
// PASSPORT CONFIGURATIONS
// REGISTER USER WITH GOOGLE
passport_1.default.use(new Google.Strategy(GOOGLE_KEYS, (issuer, profile, cb) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userExist = yield userModel_1.default.findOne({ id: profile.id });
        if (!userExist) {
            const newUser = new userModel_1.default({
                username: profile.displayName || profile.username || 'unknown',
                id: profile.id,
                email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null,
            });
            yield newUser.save();
        }
        return cb(null, profile);
    }
    catch (error) {
        return cb(error);
    }
})));
// REGISTER USER WITH FACEBOOK
passport_1.default.use(new passport_facebook_1.default.Strategy(FACEBOOK_KEYS, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userExist = yield userModel_1.default.findOne({ id: profile.id });
        if (!userExist) {
            const newUser = new userModel_1.default({
                username: profile.displayName || profile.username || 'unknown',
                id: profile.id,
                email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null,
            });
            yield newUser.save();
        }
        return done(null, profile);
    }
    catch (error) {
        return done(error);
    }
})));
passport_1.default.serializeUser((user, done) => {
    const sessionUser = user;
    done(null, sessionUser.id);
});
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        done(null, id);
    }
    catch (error) {
        done(error);
    }
}));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use((0, express_session_1.default)({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    name: 'session',
    store: connect_mongo_1.default.create({
        mongoUrl: `${process.env.MONGODB_KEY}`,
        ttl: 14 * 24 * 60 * 60, // = 14 days. Default
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 2 },
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(Livereload());
app.use(express_1.default.json());
app.use('/shopData', shopRouter_1.default);
app.use('/categories', categoriesRoute_1.default);
app.use('/checkout', checkoutRouter_1.default);
app.use('/auth', authRouter_1.default);
app.get('/', (req, res) => {
    res.send("Server is ON");
});
exports.default = app;
