import { Request as request, Response as response, NextFunction} from "express"
import passport from "passport"

const  authorize= (req :request, res :response, next: NextFunction) => {
    passport.authenticate("jwt", {session: false}, (err: any, user: any)=>{
        if (!user || err) {
            res.status(401).json({msg:"unauthorized."})
        }else {
            req.user= user;
            next();
        }
    })(req, res, next)
}

export {authorize}