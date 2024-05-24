import { useEffect, useState } from "react"
import { Color } from "./Color"
import { Colors } from "./Colors"

async function colorPicker () {
  const call= await fetch( `https://www.thecolorapi.com/random?format=json` )
  const response= await call.json()

  return response
}

function App() {
 
  const [pick, setPick]= useState(false)
  const [colorData, setColorData]= useState({})
  const [colorArray, setColorArray]= useState([])


  let i= 1

  useEffect(()=> {
    if(pick) {
      colorPicker().then(data => {
        /*             
        console.log(`Name: ${data.name.value}`);
        console.log(`RGB: ${data.rgb.value}`);
        console.log(`HSL: ${data.hsl.value}`); 
        */

        setColorData({
          id: i,
          name: data.name.value
        });

        i= i++;

        setColorArray([...colorArray, colorData])
      })
    }

    return(()=>{ setPick(false)})
  },[pick])
 

  return (
    <>
      <div>
        <button onClick={ ()=> setPick(true)}>Pick a color</button>
      </div>
      <Color color={colorData} />
      <Colors array={colorArray} />
    </>
  )
}

export default App