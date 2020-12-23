const db = require('../database');
const BaseModel = require('./baseModel');

module.exports = class Label extends BaseModel {

	constructor(color){
		super();
		this.color = color;
	}

	async createLabel() {
		try{
			const label = await db.query(`
			INSERT INTO labels (color)
			VALUES ($1)
			RETURNING *`,
			[this.color]
			);
			return label.rows[0];
		} catch(error){
			return null;
		}
	}
	static async findById(taskId) {
		const results = await db.query(`SELECT label_id, color FROM tasks_labels JOIN labels ON labels.id = tasks_labels.task_id WHERE tasks_labels.task_id = $1`, [taskId]);
		const tasks = results.rows;
		return tasks;
	}

};