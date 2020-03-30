const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.json({
            "errors": [
                "You need to sign in or sign up before continuing."
            ]
        });
    }

    jwt.verify(authHeader, authConfig.secret, (err, decoded) => {
        if(err){
            return res.json({
                "errors": [
                    "You need to sign in or sign up before continuing."
                ]
            });
        }

        req.userId = decoded.id;

        return next();
    })
}