const add_family_info = require('../models/Add_family_info');

module.exports = {
    async index(req, res){
        const results = await add_family_info.all();

        return res.json({ add_family_info: results[0] });
    },
    async show(req, res){
        const results = await add_family_info.findById(req.params.id);

        const add_family_info = results[0][0];
        return res.json({ add_family_info });
    },
    async post(req, res){
        await add_family_info.create(req.body);

        const results = await add_family_info.findLastInsert();

        const { add_family_info_id } = results[0][0];
        return res.redirect(`/add_family_info/${add_family_info_id}`);
    },
    async put(req, res){
        await add_family_info.update(req.body);

        return res.json({response: ` ${req.body.add_family_info_id} updated!`});
    }
}