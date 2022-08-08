const {Pool}=require("pg");


const pool=new Pool({
  user:'postgres',
  password:'',
  host: 'localhost',
  port: 5432,
  database: 'taskdb',
  "password": "password",
})

module.exports =pool;