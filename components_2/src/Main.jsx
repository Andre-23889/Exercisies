import { createRoot } from "react-dom/client";
import { Hello } from "./Hello";

const RootElement= createRoot(document.getElementById("root")).render(<Hello/>);