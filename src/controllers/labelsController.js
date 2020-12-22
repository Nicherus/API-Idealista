
const newLabel = async (req, res) => { 
	const color = req.color;
	
	// const label = funcao(color);
	const label = color;

	if(label) return res.status(201).send(label);	

	return res.status(500).send({error: 'erro no servidor, por favor informe um desenvolvedor'});
};


const getLabels = async (req, res) => { 

	// const labels = function()
	const labels = 1;

	if(labels) return res.status(201).send(labels);

	return res.status(500).send({error: 'erro no servidor, por favor informe um desenvolvedor'});
};

const moveLabelToTask = async (req, res) => { 
	const taskId = req.taskId;
	const labelId = req.labelId;

	// const labels = function(taskId, labelId);
	const labels = true;
	if(labels)return res.status(201).send(labels);
		
	return res.status(500).send({error: 'erro no servidor, por favor informe um desenvolvedor'});
};

module.exports = {
	newLabel,
	getLabels,
	moveLabelToTask,
};
