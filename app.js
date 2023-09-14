const http = require("http");

http.createServer(function(request, response){
response.write("On the way to being a fullstack engineer");
response.end();


}
).listen(3000);

console.log("server started on port 3000");

