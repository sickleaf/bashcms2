var ws = new WebSocket('ws://bashcms2.ueda.tech:8080/');

ws.onopen = function() {
	setInterval(function(){ws.send(location.href);},1000);
};

ws.onmessage = function(event) {
	document.getElementById("views").innerHTML = event.data;
};

