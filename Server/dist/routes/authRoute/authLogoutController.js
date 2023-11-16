"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authLogoutController = function (req, res) {
    req.logOut({ keepSessionInfo: false }, function (err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ logOut: false });
        }
        return res.json({ logOut: true });
    });
};
exports.default = authLogoutController;
