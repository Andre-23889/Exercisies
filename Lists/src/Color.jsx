import { useEffect, useState } from "react"


export function Color (color) {
  const [colorLi, setColorLi]= useState()

  useEffect(()=>{
    setColorLi(<li key={color.color.id}>{color.color.name}</li>)
  },[color])

  return(
      <div>
        {colorLi}
      </div>
  )

}