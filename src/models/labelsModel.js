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
		try{
			const results = await db.query(`
			SELECT labels.*
			FROM labels 
			JOIN tasks_labels 
			ON labels.id = tasks_labels.label_id 
			WHERE tasks_labels.task_id = $1`, 
			[taskId]);
			
			const tasks = results.rows;
			return tasks;
		} catch(error){
			return null;
		}
	}

	static async findLabel(labelId) {
		const results = await db.query(`
		SELECT *
		FROM labels 
		WHERE id = $1`, 
		[labelId]);
		
		if(results.rows.length){
			return true;
		}else{
			return false;
		}
	}

};