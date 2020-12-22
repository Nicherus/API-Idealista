
const newTask = async (req, res) => { 
	const name = req.name;

	// const task = function(name);
	const task = name;

	if(task)return res.status(201).send(task);
		
	return res.status(500).send({error: 'erro no servidor, por favor informe um desenvolvedor'});
};

const getTasks = async (req, res) => { 

	// const task = function();
	const task = 1;

	if(task) return res.status(201).send(task);

	return res.status(500).send({error: 'erro no servidor, por favor informe um desenvolvedor'});
};

const updateTask = async (req, res) => {
	const id = req.id;
	const { name, isChecked } = req.body;
	
	// const task = function(id, name, isChecked);
	const task = id;

	if(task)return res.status(201).send(task);
		
	return res.status(500).send({error: 'erro no servidor, por favor informe um desenvolvedor'});
};

const deleteTask = async (req, res) => { 
	const id = req.id;

	// const deleted = function(id);
	const deleted = id;

	if(deleted) return res.status(200).send('Ok!');
		
	return res.status(500).send({error: 'erro no servidor, por favor informe um desenvolvedor'});
};

module.exports = {
	newTask,
	getTasks,
	updateTask,
	deleteTask,
};
