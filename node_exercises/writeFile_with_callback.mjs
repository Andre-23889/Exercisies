import * as fs from "node:fs" 

fs.writeFile("frankenstein_jr.txt", "Si può fare!!", (error, data)=> {
    if(error) {
        console.log("error, somwthing went wrong"); console.dir(error);
    }

})