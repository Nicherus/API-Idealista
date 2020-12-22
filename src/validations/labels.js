const joi = require('joi');

const validateColor = (color) => {

	const colorName = joi.object({
		name: joi.string().required(),
	});

	const validation = colorName.validate(color);
	
	return !!validation.error;
};

const validateMoveLabel = (taskId, labelId) => {

	const moveLabel = joi.object({
		taskId: joi.number().required,
		labelId: joi.number().required,
	});

	const data = {
		taskId,
		labelId,
	};
	const validation = moveLabel.validate(data);
	
	return !!validation.error;
};


module.exports = {
	validateColor,
	validateMoveLabel,
};