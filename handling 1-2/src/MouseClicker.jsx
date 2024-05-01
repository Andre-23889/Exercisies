import { createRoot } from "react-dom/client";



function MouseClicker({}){

    function log(event){
        console.log(event.target.name)
    }
    function logImg(event){
        console.log(event.currentTarget.src)
    }
 
    return(
        <>
        <button name="one" className="link" width={80} onClick={log}><img  src="https://www.theshirtlist.com/wp-content/uploads/2013/11/Dead-Link.jpg" alt="dead Link meme" width={50} height={50}  onClick={logImg}/>dead link</button>
        </>
    )
}

/* answer: assegnando un nome diverso all'evento onClick dell'immagine,
 oppure stampando in console event.currentTarget.src, 
in modo da stampare in console solo le informazioni dell'elemento che na avviato l'evento */

const rootElement= createRoot(document.getElementById("root")).render(<MouseClicker />)