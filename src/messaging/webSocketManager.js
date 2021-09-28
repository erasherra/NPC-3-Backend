let io = undefined;


exports.start = function (socket){
    io = socket;
	
	io.on('connection', (socket) => {
		console.log('a user connected');
	});
    io.sockets.send('Started');
    console.log('Started');
}

exports.sendNotification = function (message){
    sendMessage(message);
}

async function sendMessage(message){
    console.log("message: "+JSON.stringify(message));
    io.emit('chat message', message);
}
