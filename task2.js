const http = require ('http');
http.createServer((req,res)=> {
res.setHeader("Content-Type","text/html")
res.end("<h1>Hello Node!!!!</h1>\n")
}).listen(4000)
console.log("succes")
