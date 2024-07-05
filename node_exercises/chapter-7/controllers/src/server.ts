import express from "express"
import 'express-async-errors'
import morgan from "morgan"
import {
    seePlanets,
    searchPlanet,
    newPlanet,
    renamePlanet,
    destroyPlanet,
} from "./controllers/planets.js"

const server= express()
const port= 3000

server.use(morgan("dev"))
server.use(express.json())

server.get('/api/planets', seePlanets);

server.get('/api/planets/:id', searchPlanet);

server.post('/api/planets', newPlanet);

server.put('/api/planets/:id', renamePlanet);

server.delete('/api/planets/:id', destroyPlanet);

server.listen(port, ()=>{
    console.log(`server listening on port http://localhost:${port}`)
});