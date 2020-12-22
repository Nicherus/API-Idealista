const db = require('../database');
const BaseModel = require('../models/baseModel');

module.exports = class Task extends BaseModel {

	constructor(name){
		super();
		this.name = name;
	}

	async createTask() {
		try{
			const task = await db.query(`
			INSERT INTO tasks (name, is_checked)
			VALUES ($1, false)
			RETURNING *`,
			[this.name]
			);
			return task.rows[0];
		} catch(error){
			return null;
		}
	}


};