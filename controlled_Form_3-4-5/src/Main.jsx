import { createRoot } from "react-dom/client";
import { InteractiveWelcome } from "./InteractiveWelcome";

function Main(){
    return(
        <div className="login">
            <InteractiveWelcome />
        </div>
    )
}

const rootElement= createRoot(document.getElementById("root")).render(<InteractiveWelcome />)