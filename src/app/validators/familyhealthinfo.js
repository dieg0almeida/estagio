module.exports = {
    post(req, res, next) {
        if (req.body.has_death_in_last_two_years === true && req.body.deaths_two_years_cause) {
            return res.json({ erro: "Campo causas de morte nos 2 ultimos anos não pode ser vazio." })
        }
        if (req.body.has_old_people == true && req.body.old_people_count == null) {
            return res.json({ erro: "Você precisa inserir o numero de pessoas velhas!" })
        }
        next();
    }
}