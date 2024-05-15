import { Route, Routes, } from "react-router-dom";
import { Welcome } from "./Welcome";


export default function App (){
   
    return(
        <Routes>
            <Route path="/" element={<Welcome user="Mario" age="44"/>} errorElement="404 file not found"/>
        </Routes>

    )
}
