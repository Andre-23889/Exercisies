import { Request as request, Response as response } from "express"
import Joi from "joi"

type Planet={
    id: number;
    name: string;
}

type Planets= Planet[]

const planetSchema=Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string()
})
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

const seePlanets = (req :request, res :response)=>{
    console.log("received request")
    
    res.status(200).json(planets)

    console.log("sending data")
}

const searchPlanet= (req :request, res :response)=>{
    const {id}= req.params
    let planet = planets.find(planet => planet.id === Number(id))
    if(!planets) {
        res.status(404).json("planet not found")
        return
    }
    res.status(200).json(planet)
}

const newPlanet = (req :request, res :response)=>{
    const {id, name}= req.body
    let newplanet :Planet= {id, name}
    const {error}= planetSchema.validate(newplanet)
    if (!error) {
        planets= [...planets, newplanet] 
        res.status(201).json({msg: "new planet in the sky!"})
        console.log("new planet in the sky!")
    }else {
        console.error("Error:", error.details)
        res.status(400).end("Invalid planet data")
    }

    planets.forEach(planet => console.log(`${planet.name}`)
    )
}

const renamePlanet =(req :request, res :response)=>{
    const {id}= req.params
    const {name}= req.body
    let planet= planets.find(planet=> planet.id === Number(id))

    planet && planets.map(planet => {planet.id === Number(id) ? {...planet, name} : planet})

    res.status(200).json({msg:`planet with id ${id} successfully renamed to ${name}`})
}

const destroyPlanet= (req :request, res :response)=>{
    const {id}= req.params
    planets.map(planet => {planet.id !== Number(id)})

    res.status(200).json({msg:`planet with id ${id} successfully obliterated`})
}

export{
    seePlanets,
    searchPlanet,
    newPlanet,
    renamePlanet,
    destroyPlanet,
}