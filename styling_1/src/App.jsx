
import { createRoot } from "react-dom/client";
import { Welcome } from "./Welcome";

function App (){
    return(
        <div>
            {<b><Welcome  userName="John" age={44}/></b>}
        </div>
    )
}

createRoot(document.getElementById("root")).render(<App />)

