const socketManager = require('../messaging/webSocketManager');

exports.start = function (){
	spagetLogicalFunction();
}

function spagetLogicalFunction(){
	
	
	sendInXSecound(5000, "Hello I am Mr Weasel");
	
	
}

async function sendInXSecound(delayTime, message){
	console.log("asdsad");
	await sleep(5000);
	socketManager.sendNotification(message);
	spagetLogicalFunction();
}


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}