
export function Colors(array){

    console.log(array.array);

    

    return(
        <div>
            
                {array.array.map((color)=>{
                    return <p key={color.id}>{color.name}</p>
                })}
            
        </div>

    )
}