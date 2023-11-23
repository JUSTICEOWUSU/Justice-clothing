"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authLogoutController = (req, res) => {
    req.logOut({ keepSessionInfo: false }, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ logOut: false });
        }
        res.clearCookie;
        req.session.passport = null;
        delete req.session.user;
        req.session.destroy(function (err) {
            if (err) {
                console.error(err);
                return res.status(500).json({ logOut: false });
            }
            return res.json({ logOut: true });
        });
    });
};
exports.default = authLogoutController;
//# sourceMappingURL=authLogoutController.js.map