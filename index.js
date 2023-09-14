const http = require ('http')

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("welcome")
    }
})

server.listen(8090,()=>{
    console.log("Server is running..");
})