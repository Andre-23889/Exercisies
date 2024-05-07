import { useState } from "react"



export function Container({title, children}){

    const [collapse, setCollapse]= useState(true)

    function hide(){
        setCollapse(!collapse)
    }

    const square={
        display:"flex",
        flexDirection: "column",
        width: '20vw',
        alignItems: "center",
        border: '10px solid red',
        backgroundColor: 'white',
        fontFamily: 'fantasy',
    }

    return(
        <div  style={square}> 
            <p onClick={hide}> {title} </p>
            {collapse &&  <div >{children}</div> }
        </div>
    )
}


