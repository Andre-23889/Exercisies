import { createRoot } from "react-dom/client";
import { App } from "./App";
import { StrictMode } from "react";

function Main() {

    return(
        <>
            <App/>
        </>
    )
}

export default Main

createRoot(document.getElementById("root")).render(<StrictMode><Main /></StrictMode>)