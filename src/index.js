const express =require('express'); //llamado a librerias iniciales
const morgan=require('morgan');

const taskRouters = require('./routes/tasks.routes');

const app = express(); 


app.use(morgan('dev')) //condiguracion morgan
app.listen(4000); //ejecucion de puerto 
app.use(taskRouters)
console.log('server on port 4000')
