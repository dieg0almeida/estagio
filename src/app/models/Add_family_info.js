const db = require('../../config/db');

module.exports = {
    all() {
        return db.promise().query('SELECT * FROM add_family_info');
    },
    findById(add_family_info_id) {
        return db.promise().query(`SELECT * FROM add_family_info WHERE add_family_info_id = ${add_family_info_id}`);
    },
    create(add_family_info) {
        const query = `INSERT INTO add_family_info 
        (
            add_family_info_id = ?,
            owner_id int = ?,
            has_knowledge_community_members = ?,
            has_associate_community_meeting bool = ?,
            work_community_priorities text = ?,
            has_socail_government_programs bool = ?
        ) 
        VALUES 
        (?, ?, ?, ?, ?, ?)`;

        const values = [
            add_family_info.add_family_info_id ,
            add_family_info.owner_id ,
            add_family_info.has_knowledge_community_members ,
            add_family_info.has_associate_community_meeting ,
            add_family_info.work_community_priorities,
            add_family_info.has_socail_government_programs,
             
        ];

        return db.promise().query(query, values);
    },
    findLastInsert() {
        return db.promise().query('SELECT * FROM add_family_info ORDER BY add_family_info_id DESC LIMIT 1');
    },
    update(add_family_info) {
        const query = `UPDATE add_family_info SET
            add_family_info_id = ?,
            owner_id int = ?,
            has_knowledge_community_members = ?,
            has_associate_community_meeting bool = ?,
            work_community_priorities text = ?,
            has_socail_government_programs bool = ?,
            WHERE add_family_info_id = ?`;

        const values = [
            add_family_info.add_family_info_id ,
            add_family_info.owner_id ,
            add_family_info.has_knowledge_community_members ,
            add_family_info.has_associate_community_meeting ,
            add_family_info.work_community_priorities,
            add_family_info.has_socail_government_programs,
            add_family_info.created_at ,
            add_family_info.updated_at,
        ];

        return db.promise().query(query, values);
    },
    destroy(add_family_info_id){
        return db.promise().query(`DELETE FROM add_family_info WHERE add_family_info_id = ${add_family_info_id}`);
    }
}