"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var passport_1 = __importDefault(require("passport"));
var dotenv_1 = require("dotenv");
var cookie_session_1 = __importDefault(require("cookie-session"));
var passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
var passport_facebook_1 = __importDefault(require("passport-facebook"));
var shopRouter_1 = __importDefault(require("./routes/shopRoute/shopRouter"));
var authRouter_1 = __importDefault(require("./routes/authRoute/authRouter"));
var checkoutRouter_1 = __importDefault(require("./routes/paymentRoute/checkoutRouter"));
var categoriesRoute_1 = __importDefault(require("./routes/categoryRoute/categoriesRoute"));
(0, dotenv_1.config)();
var userModel_1 = __importDefault(require("./database/DBModels/userModel"));
var GOOGLE_KEYS = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_KEY,
    callbackURL: 'https://justice-clothing.vercel.app/auth/google/callback',
};
var FACEBOOK_KEYS = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_SECRET_KEY,
    callbackURL: 'https://justice-clothing.vercel.app/auth/facebook/callback',
};
var app = (0, express_1.default)();
// PASSPORT CONFIGURATIONS
// REGISTER USER WITH GOOGLE
passport_1.default.use(new passport_google_oauth20_1.default.Strategy(GOOGLE_KEYS, function (accessToken, refreshToken, profile, done) {
    var userExist = userModel_1.default.findOne({
        id: profile.id
    });
    if (!userExist) {
        var newUser = new userModel_1.default({
            username: profile.displayName,
            id: profile.id,
            email: profile.emails
        });
        newUser.save(function (error) {
            if (error) {
                return done(error.message);
            }
        });
    }
    return done(null, profile);
}));
// REGISTER USER WITH FACEBOOK
passport_1.default.use(new passport_facebook_1.default.Strategy(FACEBOOK_KEYS, function (accessToken, refreshToken, profile, done) {
    var userExist = userModel_1.default.findOne({
        id: profile.id
    });
    if (!userExist) {
        var newUser = new userModel_1.default({
            username: profile.displayName,
            id: profile.id,
            email: profile.emails
        });
        newUser.save(function (error) {
            if (error) {
                return done(error);
            }
        });
    }
    return done(null, profile);
}));
passport_1.default.serializeUser(function (user, done) {
    var sessionUser = user;
    done(null, sessionUser.id);
});
passport_1.default.deserializeUser(function (user, done) {
    done(null, user);
    return;
});
app.use((0, cors_1.default)({
    origin: "*"
}));
app.use((0, cookie_session_1.default)({
    name: 'session',
    keys: ['secret'],
    maxAge: 1000 * 60 * 60 * 2
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(express_1.default.json());
app.use('/shopData', shopRouter_1.default);
app.use('/categories', categoriesRoute_1.default);
app.use('/checkout', checkoutRouter_1.default);
app.use('/auth', authRouter_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
exports.default = app;
