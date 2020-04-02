const family_info = require('../models/Family_info');

module.exports = {
    async index(req, res){
        const results = await family_info.all();

        return res.json({ family_info: results[0] });
    },
    async show(req, res){
        const results = await family_info.findById(req.params.id);

        const family_info = results[0][0];
        return res.json({ family_info });
    },
    async post(req, res){
        await family_info.create(req.body);

        const results = await family_info.findLastInsert();

        const { family_info_id } = results[0][0];
        return res.redirect(`/family_info/${family_info_id}`);
    },
    async put(req, res){
        await family_info.update(req.body);

        return res.json({response: `family ${req.body.family_info_id} updated!`});
    },
    async delete(req, res){
        await family_info.destroy(req.params.id);

        return res.json({response: "Family deleted!"});
    }
}