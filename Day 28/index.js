const express = require('express');
const { createServer } = require('http');
const { join } = require('path');
const setupWebSocketServer = require('./setupWebSocketServer');

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

setupWebSocketServer(server); // Integrating WebSocket server

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});