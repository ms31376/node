//require('node-hint').hint(options, callback);
var express = require("express");
var http    = require("http");
var app     = express();
var server  = http.createServer(app).listen(2001);
var io      =  require("socket.io")(server);

app.use(express.static("./"));
io.on("connection",function(socket){

	socket.on("chat",function(message){
		socket.broadcast.emit("message" ,message);
	});
	socket.emit("message","Wellcome to Cyber Chat");
});


console.log("Starting Socket App - http://localhost:2001");