require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const labelsMiddlewares = require('./middlewares/labelsMiddlewares'); 
const tasksMiddlewares = require('./middlewares/tasksMiddlewares'); 

const tasksController = require('./controllers/tasksController');
const labelsController = require('./controllers/labelsController');

app.use(cors());
app.use(express.json());


//tasks
app.post('/tasks', tasksMiddlewares.newTaskMiddleware, tasksController.newTask);
app.post('/tasks/:taskId/labels/:labelId', labelsMiddlewares.moveLabelToTaskMiddleware, labelsController.moveLabelToTask);
app.get('/tasks', tasksController.getTasks);
app.put('/tasks/:id', tasksMiddlewares.updateTaskMiddleware, tasksController.updateTask);
app.delete('/tasks/', tasksMiddlewares.deleteTaskMiddleware,tasksController.deleteTask);

//labels
app.post('/labels', labelsMiddlewares.newLabelMiddleware, labelsController.newLabel);
app.get('/labels', labelsController.getLabels);


module.exports = app;