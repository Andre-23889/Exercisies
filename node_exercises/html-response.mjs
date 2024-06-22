import {createServer} from "node:http"

const server= createServer((req, res)=>{

    if(req.url === '/') {
        res.statusCode= 200;

        res.setHeader('content-Type','text/html');
    
        const responseBody= "<html><body><h4> Hello World </h4></body></html>";
    
        res.write(responseBody);

        res.end(()=> console.log("invio dedi dati"));
    }
})

server.listen(3000, ()=> console.log("server in ascolto sulla porta 3000"))