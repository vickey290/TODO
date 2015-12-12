var express=require('express');
var app = express();
var port =process.env.PORT || 3000;
var bodyparser=require('body-parser');
var todos=[];
var todoNextId=1;
var _= require('underscore');
app.get('/',function(req,res){
	res.send('Welcome to TO-DO api');
});
app.use(bodyparser.json());

app.get('/listall',function(req,res){
	var resp='';
	for(var i=0;i<todos.length;i++){
resp+=JSON.stringify(todos[i])+'\n';
	}
	res.send('The todos are as follows \n'+resp);
});

app.get('/listall/:id',function(req,res){
	var resp='';
	console.log(req.params.id);
	todos.forEach(function(todo){
		console.log(todo);
		console.log(typeof todo.id);
		console.log(req.params.id==todo.id);
		if(req.params.id==todo.id){

			resp=todo;
		}
	})
	res.json(resp);
});

app.post('/todos',function(req,res){
	var newTodo=req.body;
	newTodo.id=todoNextId;
	todos.push(newTodo);
	console.log(newTodo);
	res.json(todos);
	todoNextId++;

});

app.listen(port,function(){
	console.log('listening on port'+port);
});