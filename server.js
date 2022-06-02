const http = require("http");
const fs = require("fs");

const requestListener = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(fs.readFileSync("winter.html"));
  response.end();
};

const server = http.createServer(requestListener);
server.listen(8080);
