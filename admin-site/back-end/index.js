const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var database=require('./database');
const PORT = 3000;
const app = express();
const fileupload=require('express-fileupload');

app.use(bodyParser.json());
app.use(cors())
app.use(fileupload())
app.get('/', function(req, res) {
	res.send('Hello from server')
})
app.get("/uploadedfiles",function(req,res){
  var querry=`SELECT * FROM psgskill.uploaddata`
  database.query(querry,function(err,data){
    res.send(data)
  })
})

app.listen(PORT, function(){
    console.log("Server running on localhost:" + PORT);
  });