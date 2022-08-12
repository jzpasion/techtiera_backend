const http = require("http");
const port = process.env.PORT || 9023;
const app = require('./app');
const connect = require('./api/utils/dbConnect')

var server = http.createServer(app);
connect();
server.listen(port);
console.log("Listening at port: "+port);