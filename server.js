let port = 9000;
let http = require("http");

let server = http.createServer(function(request, response){
  response.end("Hello there!!!!");
});

server.listen(port, function(){
  console.log("Server listening on port " + port);
});
