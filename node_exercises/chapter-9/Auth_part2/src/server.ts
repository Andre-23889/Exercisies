import express from "express"
import 'express-async-errors'
import morgan from "morgan"
import 'dotenv/config'
import {
    seePlanets,
    searchPlanet,
    newPlanet,
    renamePlanet,
    destroyPlanet,
    addImage,
} from "./controllers/planets.js"
import {login, signup} from "./controllers/users.js"
import multer from 'multer'

const storage= multer.diskStorage({
    destination: (req, file, cb)=> {cb(null, "./uploads")},
    filename: (req, file, cb)=> {cb(null, file.originalname)}
})
const upload= multer({ storage })

const server= express()
const port= 3000

server.use(morgan("dev"))
server.use(express.json())

server.get('/api/planets', seePlanets);

server.get('/api/planets/:id', searchPlanet);

server.post('/api/planets', newPlanet);

server.put('/api/planets/:id', renamePlanet);

server.delete('/api/planets/:id', destroyPlanet);

server.post('/api/planets/:id/image',upload.single("image"), addImage)

server.post('/api/users/login', login);
server.post('/api/users/signup', signup);

server.listen(port, ()=>{
    console.log(`server listening on port http://localhost:${port}`)
});