module.exports = {
    post(req, res, next) {
        if (req.body.construction === null) {
            return res.json({ erro: "Campo construção não pode ser vazio." })
        }
        if (req.body.has_iptu == true && req.body.iptu_holder === null) {
            return res.json({ erro: "Você precisa inserir o iptu se confirmou que há iptu!" })
        }
        next();
    }
}