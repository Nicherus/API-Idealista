const db = require('../database');

module.exports = class BaseModel {

	constructor(id){
		this.id = id;
	}

	deleteFrom(tableName) {
		return db.query(`DELETE FROM ${tableName} WHERE id = $1`, [this.id]);
	}

	static async findAll(tableName) {
		const results = await db.query(`SELECT * FROM ${tableName}`);	
		const tasks = results.rows.map(t => new BaseModel(t.id, t.name));
		return tasks;
	}

	static async selectFrom(tableName) {
		const result = await db.query(`SELECT * FROM ${tableName}`);
		return result.rows;
	}		


};