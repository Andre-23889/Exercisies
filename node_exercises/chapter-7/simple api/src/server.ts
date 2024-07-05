import express from "express"
import 'express-async-errors'
import morgan from "morgan"

const server= express()
const port= 3000

server.use(morgan("dev"))
server.use(express.json())


type Planet={
    id: number;
    name: string;
}

type Planets= Planet[]


let planets :Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
]

server.get('/api/planets', (req,res)=>{
    console.log("received request")
    
    res.status(200).json(planets)

    console.log("sending data")
    
});

server.get('/api/planets/:id', (req,res)=>{ 
    const {id}= req.params
    let planet= planets.find(planet=> planet.id === Number(id))
    if(!planets) {
        res.status(404).json({msg:"planet not found"})
        return
    }
    res.status(200).json(planet)
});

server.post('/api/planets', (req,res)=>{
    const {id, name}= req.body
    let newplanet :Planet= {id, name}
    planets= [...planets, newplanet]
    if (newplanet) {
        res.status(201).json({msg:"new planet in the sky!"})
    } else{
        res.status(401).json({msg:"incorrect data format: need a raw json planet object"})
    }
    console.log("new planet in the sky!")

    planets.forEach(planet => console.log(`${planet.name}`)
    )
})

server.listen(port, ()=>{
    console.log(`server listening on port http://localhost:${port}`)
})
