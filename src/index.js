const express =require('express'); //llamado a librerias iniciales
const morgan=require('morgan');

const cors=require('cors');
const taskRouters = require('./routes/tasks.routes');

const app = express(); 


app.use(morgan('dev')) //condiguracion morgan
app.use(cors())
app.listen(5000); //ejecucion de puerto 

app.use(express.json()) //ejecucion de JSON parameters

app.use(taskRouters)
app.use((err,req,res,next)=>{
  return res.json({
    message: err.message
  })
})
console.log('server on port 5000')
