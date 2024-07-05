import * as dotenv from 'dotenv'
dotenv.config()
import { Request as request, Response as response } from "express"
import { db } from "../db.js"
import jwt from "jsonwebtoken"
const login= async(req :request, res :response)=>{
    const {username, password} = req.body

    const user= await db.one(`SELECT * FROM users WHERE username=${username}`)

    if (user && user.password === password) {
        const payload = {
            id: user.id,
            username,
        }
        const {SECRET = ""}= process.env;
        const token = jwt.sign(payload, SECRET);
        
        await db.none(`UPDATE users SET token=${token} WHERE id=${user.id}`)
        res.status(200).json({id: user.id, username, token})
    } else{
        res.status(400).json({msg:"Username or Password incorrect"})
    }
}

const signup= async(req :request, res :response)=>{
    const {username, password} = req.body
    const user= await db.oneOrNone(`SELECT * FROM users WHERE username=${username}`)

    if (user) {
        res.status(400).json({msg:"username already in use"})
    } else{
        const {id} = await db.one(`INSERT INT users (username, password) VALUES (${username}, ${password}) RETURNING id`)
        
        res.status(201).json({id, msg:"registration completed"})
    }
}

export {
    login,
    signup,
}