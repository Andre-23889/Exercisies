import express from "express"
import 'express-async-errors'
import morgan from "morgan"
import Joi from "joi"

const server= express()
const port= 3000

server.use(morgan("dev"))
server.use(express.json())


let planets  = [
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
        res.status(404).json("planet not found")
        return
    }
    res.status(200).json(planet)
});

const planetSchema=Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string()
})


server.post('/api/planets', (req,res)=>{
    const {id, name}= req.body
    let newplanet= {id, name}
    const {error}= planetSchema.validate(newplanet)
    if (!error) {
        planets= [...planets, newplanet] 
        res.status(201)
        res.end("new planet in the sky!")
        console.log("new planet in the sky!")
    }else {
        console.error("Error:", error.details)
        res.status(400).end("Invalid planet data")
    }

    planets.forEach(planet => console.log(`${planet.name}`)
    )
})

server.put('/api/planets/:id', (req,res)=>{
    const {id}= req.params
    const {name}= req.body
    let planet= planets.find(planet=> planet.id === Number(id))

    planet && planets.map(planet => {planet.id === Number(id) ? {...planet, name} : planet})

    res.status(200).json({msg:`planet with id ${id} successfully renamed to ${name}`})
})


server.delete('/api/planets/:id', (req,res)=>{
    const {id}= req.params
    planets.map(planet => {planet.id !== Number(id)})

    res.status(200).json({msg:`planet with id ${id} successfully obliterated`})
})

server.listen(port, ()=>{
    console.log(`server listening on port http://localhost:${port}`)
})
1