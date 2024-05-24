import { createRoot } from "react-dom/client";
import { App } from "./App";


const Root= createRoot(document.getElementById("root")).render(
    <div>
        <p>Exercise components_1:</p>
        <br/>
        <App/>
    </div>
);