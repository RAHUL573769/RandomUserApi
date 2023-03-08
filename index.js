const http = require('http');

const server=http.createServer((req,res)=>{



    res.write("<h1>Hello From Express</h1>")
})

server.listen(5000);