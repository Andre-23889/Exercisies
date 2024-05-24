import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { SearchGithubUser } from "./SearchGithubUser";
import { ShowGithubUser } from "./ShowGithubUser";



export default function App (){

    const position= useLocation().pathname
    console.log(position);

    return(
        <>
        <Routes>
            <Route path={"/" || undefined} element={<Welcome user="Mario" age="44"/>} errorElement="404 file not found"/>
            <Route path="/counter" element={<Counter/>} />
            <Route path="/gitUser" element={<SearchGithubUser />}>
                <Route path=":user" element={<ShowGithubUser />}/>
            </Route>
            <Route path="*"  element={<h3>404: page not found</h3>}/>
            
        </Routes>
        <div>
            {position !== ("/" || undefined) && <Link to="/"><h5>Home</h5></Link>}
            {position === "/" && <>
                <Link to="/counter"><h5>Counter app</h5></Link>
                <Link to="/gitUser"><h5>GitHub user</h5></Link>

            </>}
        </div>
        </>
    )
}

export function address () {position= useLocation(); return {position}}