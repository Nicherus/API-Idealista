
function newTaskMiddleware(req, res, next){
	const { name } = req.body;
	
	if(!name) return res.status(422).send({error: 'envie um nome para sua task'});

	// const validation = validate(name);
	const validation = false;
	if(validation) return res.status(422).send({error: 'cheque os dados que esta enviando'});
	
	req.color = name;
	next();
}

function updateTaskMiddleware(req, res, next){
	const { id } = req.params.id;
	const { name, isChecked } = req.body; 

	// const exists = function(id);
	const exists = true;
	if(!exists) return res.status(404).send({error: 'essa tarefa não existe'});

	// const validation = function(name, isChecked);
	const validation = false;
	if(validation) return res.status(422).send({error: 'cheque os dados que esta enviando'});
	
	req.id = id;
	next();
}

function deleteTaskMiddleware(req, res, next){
	const { id } = req.params.id;

	// const exists = function(id);
	const exists = true;
	if(!exists) return res.status(404).send({error: 'essa tarefa não existe'});
	
	req.id = id;
	next();
}

module.exports = {
	newTaskMiddleware,
	updateTaskMiddleware,
	deleteTaskMiddleware,
};
