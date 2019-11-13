const http = require('http');
const app = require('./moviesapp');

const PORT = 4000;
const server = http.createServer(app);

server.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});