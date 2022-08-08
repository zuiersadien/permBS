const { Router } = require('express');

const router = Router()
const { getAllTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/tast.controller')

router.get('/tasks', getAllTasks)

router.get('/tasks/10', getTask)

router.post('/tasks', createTask)

router.delete('/tasks', deleteTask)

router.put('/tasks', updateTask)



module.exports = router;