import * as dotenv from 'dotenv'
dotenv.config()
import passport from "passport"
import passportJWT from "passport-jwt"
import { db } from './db.js';



const {SECRET}= process.env;

if (!SECRET) {
    throw new Error("SECRET is not defined in environment variables");
  }

passport.use(
    new passportJWT.Strategy(
        {
        secretOrKey: SECRET,
        jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        },
        async (payload: any, done: any) => {
            const user= db.one(`SELECT * FROM USERS WHERE id=${payload.id}`)
            console.log(user);

            try {
                return user ? done(null,user) : done(new Error("user not found"))
            } catch (error) {
                done(error)
            }
            
        }
    )
)