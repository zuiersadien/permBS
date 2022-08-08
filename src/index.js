const express =require('express'); //llamado a librerias iniciales
const morgan=require('morgan');

const app = express(); 


app.use(morgan('dev')) //condiguracion morgan
app.listen(3000); //ejecucion de puerto 

console.log('server on port 3000')