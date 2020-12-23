const db = require('../database');

module.exports = class BaseModel {

	constructor(id){
		this.id = id;
	}

	async deleteFrom(tableName) {
		return await db.query(`DELETE FROM ${tableName} WHERE id = $1`, [this.id]);
	}

	static async findAll(tableName) {
		const results = await db.query(`SELECT * FROM ${tableName}`);
		return results.rows;
	}

	static async selectFrom(tableName) {
		const result = await db.query(`SELECT * FROM ${tableName} WHERE id = $1`, [this.id]);
		return result.rows;
	}		



};