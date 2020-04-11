module.exports = {
    post(req, res, next) {
        if (req.body.construction === null) {
            return res.json({ erro: "Construction value won't nullable" })
        }
        if (req.body.has_iptu == true && req.body.iptu_holder === null) {
            return res.json({ erro: "You need input iptu value" })
        }
        next();
    }
}