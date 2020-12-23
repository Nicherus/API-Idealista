const Label = require('../models/labelsModel');
const Task = require('../models/tasksModel');
const labelsValidation = require('../validations/labels');

function newLabelMiddleware(req, res, next){
	const { color } = req.body;

	if(!color) return res.status(422).send({error: 'envie uma cor'});
	
	const validation = labelsValidation.validateColor(color);
	if(!validation) return res.status(422).send({error: 'cheque os dados que esta enviando'});

	req.color = color;
	next();
}

async function moveLabelToTaskMiddleware(req, res, next){
	const taskId = req.params.taskId;
	const labelId = req.params.labelId;

	if(!taskId) return res.status(422).send({error: 'envie um id de task'});
	if(!labelId) return res.status(422).send({error: 'envie um id de label'});
	
	const validation = labelsValidation.validateMoveLabel(taskId, labelId);
	if(!validation) return res.status(422).send({error: 'cheque os dados que esta enviando'});

	const label = await Label.findLabel(labelId);
	const task = await Task.findTask(taskId);
	
	if(!label || !task) return res.status(404).send({error: 'essa tarefa ou label não existe'});

	req.taskId = taskId;
	req.labelId = labelId;
	next();
}

module.exports = {
	newLabelMiddleware,
	moveLabelToTaskMiddleware,
};
