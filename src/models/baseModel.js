const db = require('../database');

module.exports = class BaseModel {

	constructor(id){
		this.id = id;
	}

	deleteFrom(tableName) {
		return db.query(`DELETE FROM ${tableName} WHERE id = $1`, [this.id]);
	}

	async findAll(tableName) {
		const query = await db.query(`SELECT * FROM ${tableName}`);
		return query.rows;
	}

	static async selectFrom(tableName) {
		const result = await db.query(`SELECT * FROM ${tableName}`);
		return result.rows;
	}		


};