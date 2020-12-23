const Label = require('../models/labelsModel');
const Task = require('../models/tasksModel');
const BaseModel = require('../models/baseModel');

const newLabel = async (req, res) => { 
	const color = req.color;
	


	const label = new Label(color);
	const labelData = await label.createLabel();

	if(labelData) return res.status(201).send(labelData);	

	return res.status(500).send({error: 'erro no servidor, por favor informe um desenvolvedor'});
};


const getLabels = async (req, res) => { 

	const baseModel = new BaseModel();
	const labels = await baseModel.findAll('labels');
	
	if(labels) return res.status(201).send(labels);

	return res.status(500).send({error: 'erro no servidor, por favor informe um desenvolvedor'});
};

const moveLabelToTask = async (req, res) => { 
	const taskId = req.taskId;
	const labelId = req.labelId;

	let labelData = await Label.findById(taskId);
	const isLabelInTask =  labelData.find(element => element.id == labelId);

	if(isLabelInTask){
		return res.status(200).send(labelData);
	}
	
	const insertLabel = await Task.insertLabelIntoTask(labelId, taskId);
	
	if(!insertLabel){
		return res.status(500).send({error: 'erro no servidor, por favor informe um desenvolvedor'});
	}

	labelData = await Label.findById(taskId);

	if(labelData) return res.status(201).send(labelData);
		
	return res.status(500).send({error: 'erro no servidor, por favor informe um desenvolvedor'});
};

module.exports = {
	newLabel,
	getLabels,
	moveLabelToTask,
};
