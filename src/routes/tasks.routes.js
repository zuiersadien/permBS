const { Router } = require('express');

const router = Router()
const { getAllTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/tast.controller')

router.get('/tasks', getAllTasks)

router.get('/tasks/:id', getTask)

router.post('/tasks', createTask)

router.delete('/tasks/:id', deleteTask)

router.put('/tasks/:id', updateTask)



module.exports = router;