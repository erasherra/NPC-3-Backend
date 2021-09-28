const { Server } = require("socket.io");

const sm = require('../messaging/webSocketManager');
const ch = require('../controllers/conversationHandler');

exports.startServices = function (server){
	const io = new Server(server);//.listen(8000);
	
	//if (io.connected){
		console.log("asdsad");
		sm.start(io);
		ch.start();
	//}
}
