const http = require('http');
const app = require('./app');

const PORT = 4000;
const server = http.createServer(app);

server.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});