const AddFamilyInfo = require('../models/AddFamilyInfo');

module.exports = {
    async index(req, res){
        const results = await AddFamilyInfo.all();

        return res.json({ AddFamilyInfo: results[0] });
    },
    async show(req, res){
        const results = await AddFamilyInfo.findById(req.params.id);
        const AddFamilyInfo = results[0][0];

        return res.json({ AddFamilyInfo });
    },
    async post(req, res){
        await AddFamilyInfo.create(req.body);

        const results = await AddFamilyInfo.findLastInsert();
        const { AddFamilyInfo_id } = results[0][0];
        
        return res.redirect(`/AddFamilyInfo/${AddFamilyInfo_id}`);
    },
    async put(req, res){
        await AddFamilyInfo.update(req.body);

        return res.json({response: ` ${req.body.AddFamilyInfo_id} updated!`});
    },
    async delete(req, res){
        await AddFamilyInfo.destroy(req.params.id);

        return res.json({response: "Add family deleted!"});
    }
}