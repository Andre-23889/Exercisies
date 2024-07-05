import { Request as request, Response as response } from "express"
import Joi from "joi"
import pgPromise from "pg-promise"

const db= pgPromise()("postgres://postgres:postgres@localhost:5432/planets_exercises")

const setUpDB= async() => {
    await db.none(`
        DROP TABLE IF EXISTS planets;
        
        CREATE TABLE planets (
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL)
    `)

    await db.none(`INSERT INTO planets (name) VALUES ('Earth')`)
    await db.none(`INSERT INTO planets (name) VALUES ('Mars')`)

    const planets= await db.many(`SELECT * FROM planets`)
    console.log(planets);
}
setUpDB()

type Planet={
    name: string;
}
type Planets= Planet[]

const planetSchema=Joi.object({
    name: Joi.string().required()
})


const seePlanets = async (req :request, res :response)=>{

    const planets= await db.many(`SELECT * FROM planets`)
    res.status(200).json(planets)
}

const searchPlanet= async (req :request, res :response)=>{ 
    const {id}= req.params

    const planet = await db.oneOrNone(`SELECT * FROM planets WHERE id=${Number(id)}`)
    res.status(200).json(planet)
}

const newPlanet = async (req :request, res :response)=>{
    const {name}= req.body
    let newplanet :Planet= {name}
    const {error}= planetSchema.validate(newplanet)

    if (!error) {
        await db.none(`INSERT INTO planets (name) VALUES (${name})`)
        res.status(201).json({msg: "new planet in the sky!"})
        console.log("new planet in the sky!")
    }else {
        console.error("Error:", error.details)
        res.status(400).end("Invalid planet data")
    } 
}

 const renamePlanet = async (req :request, res :response)=>{
    const {id}= req.params
    const {name}= req.body

    await db.none(`UPDATE planets SET name=${name} WHERE id=${Number(id)}`)
    res.status(200).json({msg:`planet with id ${id} successfully renamed to ${name}`})
} 

const destroyPlanet= async (req :request, res :response)=>{
    const {id}= req.params
    
    await db.none(`DELETE FROM planets WHERE id=${Number(id)}`)
    res.status(200).json({msg:`planet with id ${id} successfully obliterated`})
}

export{
    seePlanets,
    searchPlanet,
    newPlanet,
    renamePlanet,
    destroyPlanet,
}