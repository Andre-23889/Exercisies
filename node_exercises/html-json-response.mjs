import {createServer} from "node:http"

const server= createServer((req, res)=>{
    console.log("request received");

    if(req.url === '/') {
        
        res.setHeader('content-Type','application/Json');

        res.writeHead(301,{location: '/mars'});
       
        const responseBody= JSON.stringify({location: "Mars"});
    
        res.end(responseBody,()=> console.log("trasferimento effettuato"));
    }

    
    if(req.url === '/mars') {
        res.setHeader('content-Type', 'text/html');

        const responseBody= "<html><body><h4> Hello human, welcome to Mars</h4></body></html>";

        res.write(responseBody);

        res.end(()=> console.log("benvenuto inviato"));
    }
})

server.listen(3000, ()=> console.log("server in ascolto sulla porta 3000"))