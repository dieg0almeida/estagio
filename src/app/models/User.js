const db = require('../../config/db');

module.exports = {
    signIn(user){
        return db.promise().query(`SELECT * FROM users WHERE email like '${user.email}'`);
    }
}