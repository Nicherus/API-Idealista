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


	static async insertLabelIntoTask(labelId, taskId) {
		try{
			const query = await db.query(`
			INSERT INTO tasks_labels (label_id, task_id)
			VALUES ($1, $2)`,
			[labelId, taskId]
			);
			return query;
		} catch(error){
			return null;
		}
	}

	async updateTaskNameCheck(id, name, isChecked) {
		const result = await db.query(`	
		UPDATE tasks
		SET name=$2, is_checked=$3
		WHERE id = $1
		RETURNING *`, 
		[id, name, isChecked]);
		
		return result.rows[0];
	}

	async updateTaskName(id, name) {
		const result = await db.query(`	
		UPDATE tasks
		SET name=$2,
		WHERE id = $1
		RETURNING *`, 
		[id, name]);
		
		return result.rows[0];
	}

	async updateTaskCheck(id, isChecked) {
		console.log(isChecked);
		const result = await db.query(`	
		UPDATE tasks
		SET is_checked=$2
		WHERE id = $1
		RETURNING *`, 
		[id, isChecked]);
		
		return result.rows[0];
	}

	static async findTask(taskId) {
		const results = await db.query(`
		SELECT *
		FROM tasks 
		WHERE id = $1`, 
		[taskId]);
		
		if(results.rows.length){
			return true;
		}else{
			return false;
		}
	}

};