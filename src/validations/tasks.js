const joi = require('joi');

const validateTaskName = (name) => {

	const taskName = joi.object({
		name: joi.string().required(),
	});

	const validation = taskName.validate(name);
	
	return !!validation.error;
};

const validateUpdateTask = (id, name, isChecked) => {

	const task = joi.object({
		id: joi.number().required,
		name: joi.string().required,
		isChecked: joi.boolean().required,
	});

	const data = {
		id,
		name,
		isChecked,
	};
	const validation = task.validate(data);
	
	return !!validation.error;
};

const validateDeleteTask = (id) => {

	const task = joi.object({
		id: joi.number().required,
	});

	const data = {
		id,
	};
	const validation = task.validate(data);
	
	return !!validation.error;
};

module.exports = {
	validateTaskName,
	validateUpdateTask,
	validateDeleteTask,
};