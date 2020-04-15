const User = require('../models/User');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

module.exports = {

    renderSingIn(req, res){
        return res.render("consultation_page.njk");
    },

    async singIn(req, res) {
        
        const results = await User.signIn(req.body);
        if (results[0].length === 0 || results[0][0].password !== req.body.password) {
            return res.json({
                "success": false,
                "errors": [
                    "Invalid login credentials. Please try again."
                ]
            });
        } else {
            const token = jwt.sign({ id: results[0][0].user_id },
                authConfig.secret,
                { expiresIn: 86400 });

            const  { user_id, email } = results[0][0];
            res.status(200);
            res.json({ user_id, email, success: true , token});
        }
    }

   
}