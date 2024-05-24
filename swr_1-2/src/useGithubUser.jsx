

import useSWR from "swr"



export function useGithubUser (input) {

    
    let fetcher= null
    
    input && (fetcher= (url)=> fetch(url,).then((call)=> {
        if(call.status=== 200) {return call.json()} else { console.log(call); throw new Error(`${call.status} user not foud `)}
    }))
    
    const {data, error, isLoading, mutate} = useSWR(`https://api.github.com/users/${input}`, fetcher)

    return({
        data: data,
        error,
    })
}