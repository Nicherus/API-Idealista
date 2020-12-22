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

};