var socket = io("http://localhost:2001");

socket.on("disconnect", function () {
	setTitle("Disconnected");
});

socket.on("message", function (message) {
	printMessage(message);
});

document.forms[0].onsubmit = function () {
    var input = document.getElementById("message");
    printMessage(input.value);
    socket.emit("chat", input.value);
    input.value = '';
};

function setTitle (title) {
    document.querySelector("h1").innerHTML = title;
};


function printMessage(message) {
    var p = document.createElement('p');

    p.innerText = message;
    
    console.log(p.innerText);
    document.querySelector('div.messages').appendChild(p).innerHTML=message;
    
};