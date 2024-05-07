
import { createRoot } from "react-dom/client";
import { Container } from "./Container";

export function ImageContent(){


    
    const poster={
        width: "19vw",
        height: "90%",
        margin: "0px 0px"
    }

    return(
        <div >
            <Container title="nuke test">
                <img style={poster} src="https://ae01.alicdn.com/kf/Se4ca031b41ad4a378a448347968f9065D.jpg_640x640Q90.jpg" alt="thumb-up boy from Fallout universe, riding a bomb like the pilot of doctor strangelove "/>
            </Container> 
        </div>
    )
   
}


createRoot(document.getElementById("root")).render(<ImageContent />)