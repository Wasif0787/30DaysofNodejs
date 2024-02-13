const express = require('express');
const http = require('http');
const WebSocket = require('ws');

function setupWebSocket(server) {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', function connection(ws) {
        console.log('Client connected');

        ws.on('message', function incoming(message) {
            console.log('Received: %s', message);
            // Echo back the received message
            ws.send(message);
        });
    });
}

const app = express();
app.use(express.static(__dirname + "/public"));
const server = http.createServer(app);


setupWebSocket(server);

// Serve the HTML page with WebSocket connection
app.get('/websocket', (req, res) => {
    res.sendFile(__dirname + '/public/socket.html');
});


app.get("/", (req, res) => {
    res.send("Hello")
})


server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
