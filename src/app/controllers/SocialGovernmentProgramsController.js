const SocialGovernmentPrograms = require('../models/SocialGovernmentPrograms')

module.exports = {
  async index(req, res) {
    const results = await SocialGovernmentPrograms.all();
    return res.json({ socialGovernmentPrograms: results[0] });
  },
  async show(req, res) {
    const results = await SocialGovernmentPrograms.findById(req.params.id);
    const socialGovernmentPrograms = results[0][0];
    return res.json({ socialGovernmentPrograms });
  },
  async post(req, res) {
    await SocialGovernmentPrograms.create(req.body);
    const results = await SocialGovernmentPrograms.findLastInsert();
    const { socialGovernmentProgramsId } = results[0][0];
    
    return res.redirect(`/socialGovernmentPrograms/${socialGovernmentProgramsId}`);
  },
  async put(req, res) {
    await SocialGovernmentPrograms.update(req.body);
    return res.json({ response: `Social government programs ${req.body.id} updated!` });
  },
  async delete(req, res) {
    await SocialGovernmentPrograms.destroy(req.params.id);
    return res.json({ response: 'Social government programs deleted!' });
  },
}
