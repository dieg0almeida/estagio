const FamilyInfo = require('../models/FamilyInfo');

module.exports = {
    async index(req, res){
        const results = await FamilyInfo.all();

        return res.json({ FamilyInfo: results[0] });
    },
    async show(req, res){
        const results = await FamilyInfo.findById(req.params.id);
        const FamilyInfo = results[0][0];
        
        return res.json({ FamilyInfo });
    },
    async post(req, res){
        await FamilyInfo.create(req.body);

        const results = await FamilyInfo.findLastInsert();
        const { family_info_id } = results[0][0];

        return res.redirect(`/family_info/${family_info_id}`);
    },
    async put(req, res){
        await FamilyInfo.update(req.body, req.params.id);

        return res.json({response: `family ${req.body.params.id} updated!`});
    },
    async delete(req, res){
        await FamilyInfo.destroy(req.params.id);

        return res.json({response: "Family deleted!"});
    }
}