const http = require("http");
const port = process.env.PORT || 9023;
const app = require('./app');

var server = http.createServer(app);

server.listen(port);
console.log("Listening at port: "+port);