const Task = require('../models/tasksModel');
const Label = require('../models/labelsModel');
const BaseModel = require('../models/baseModel');
const db = require('../database');

const newTask = async (req, res) => { 
	const name = req.name;


	const task = new Task(name);

	const taskData = await task.createTask();
	
	const taskUser = {
		id: taskData.id,
		name: taskData.name,
		isChecked: taskData.is_checked,
		labels: [],
	};

	if(taskUser)return res.status(201).send(taskUser);

	return res.status(500).send({error: 'erro no servidor, por favor informe um desenvolvedor'});
};

const getTasks = async (req, res) => { 

	const tasks = await Task.findAll('tasks');
	const taskList = await Promise.all(tasks.map(async t =>{
		t.labels = await Label.findById(t.id);
		return t;
	}))
	

	if(tasks) return res.status(201).send(taskList);

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

	console.log(id);
	const baseModel = new BaseModel(id);
	const deleted = baseModel.deleteFrom('tasks');

	if(deleted) return res.status(200).send('Ok!');
		
	return res.status(500).send({error: 'erro no servidor, por favor informe um desenvolvedor'});
};

module.exports = {
	newTask,
	getTasks,
	updateTask,
	deleteTask,
};
