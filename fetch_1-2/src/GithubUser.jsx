import { useEffect, useState } from "react"

export function GithubUser({userInput="null"}) {

    const [username, setUsername]=useState("'username'")
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState(false)



    const callAborter= new AbortController()
    


    useEffect(()=>{
        try {
            
            const calling= setTimeout(()=>{
                callAborter.abort()
                setLoading(false)
                
                throw new Error("connection timed-out");
            }, 6000)

            console.log("loadingTest")


            setLoading(true)
        
            fetch(`https://api.github.com/users/${userInput}`,{signal:callAborter.signal})
                .then((call)=> call.json())
                .then((data)=> {
                    console.log("veryfying data: " + data.name)
                    setUsername(data.name)
                })
                .catch((error)=> { throw new Error(`error in data tranfer: ${error}, please try again`)})
            .finally(()=> {
                setLoading(false)
                clearTimeout(calling)
            })

        } catch (error) {
            console.log(error)

            setError(error)
        }
        console.log("calling")   

        return(()=>{
           if(loading){clearTimeout(calling)}
            setLoading(false)
        })
    },[userInput])


    console.log(`useEffect dependency & input test: ${userInput}`)
    console.log("loadstate: "+ loading);

    return(
        <div>
            {loading ? <h2>loading...</h2> : <h2>welcome {username}</h2>}
            {error && <p>{error.message}</p>}

        </div>
    )
}