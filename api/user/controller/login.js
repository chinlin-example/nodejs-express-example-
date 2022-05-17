const passport = require('passport');


module.exports = function(req, res, next) {
    passport.authenticate("local-login", function (err, user, info) {
        if (err) return next(err);
        if (!user) {
            return res.status(401).json(info);
        }
        req.logIn(user, function() {
            return res.status(200).json(user);
        });
    })(req, res, next);
}