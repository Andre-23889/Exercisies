import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

export function SearchGithubUser() {
    const [input, setInput]= useState("")

    function handleSearch(event) {
        event.preventDefault()
        const userInpiut= event.target.value

        setInput( userInpiut)
    }

    return(
        <>
            <p>search a Github user by username</p>
            <label>username?<br/><input name="input-name" id="searchUser" type="text"onChange={handleSearch}/></label>

            <Link to={'/gitUser/'+input}><button name="search">Search</button></Link>

            <Outlet/>
        </>
    )
}