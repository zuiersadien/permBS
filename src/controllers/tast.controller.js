
const pool = require("../db")

const getAllTasks = async (req, res) => {
  const allTask = await pool.query('SELECT * FROM task')
  try {
    res.send(allTask.rows)
  } catch (error) {
    console.log(error.message)
  }

}
const getTask = async (req, res,next) => {
  try {
    const { id } = req.params
    const response = await pool.query('SELECT * FROM task WHERE id =$1', [id])
    if (response.rows.length === 0) 
    return res.status(404).json({
      messsage: "task not found"
     
    })
    
    return res.sendStatus(204)
    // res.json(response.rows[0])
  
  } catch (error) {
    next(err)
  }


}

const createTask = async (req, res ,next) => {
  const { title, description } = req.body
  try {
    const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING*', [title, description])
    // const result=await pool.query(`INSERT INTO task (title, description) VALUES ($1, $2)`, [title, description])
    res.send('creating a task') //agregando valores a nuestro base de datos
    console.log(result.rows[0])
  } catch (err) {
    next(err)
  }

}
const deleteTask = async (req, res ,next) => {
  try {
    const { id } = req.params
    const response = await pool.query('DELETE FROM task WHERE id =$1 RETURNING *', [id])
    if (response.rows.length === 0) return res.status(404).json({
      message: 'Task not found'
    })
    res.send(response.rows[0])
  } catch (err) {
    next(err)
  }
}
const updateTask = async (req, res,next) => {
  try {
    const { id } = req.params;
    const {title, description}=req.body
    const response =await pool.query('UPDATE task SET title = $1 ,description = $2 WHERE id =$3 RETURNING *',[title, description,id])
    if (response.rows.length === 0) return res.status(404).json({
        message: 'Task not found'
        })
    res.json(response.rows[0])
  } catch (error) {
    next(error)
  }
 
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask
}