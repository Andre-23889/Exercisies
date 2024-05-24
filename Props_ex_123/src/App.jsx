
import { createRoot } from "react-dom/client";
import { Welcome } from "./Welcome";

function App (){
    return(
        <div>
            <Welcome  userName={<b>john</b>} age={44}/>
        </div>
    )
}

/* Quando si costriusce un prop con un modulo è possibile
   assegnare un valore di default a quel modulo (vedi file Welcome).
   Se nel modulo genitore viene assegnato un valore a quel prop
   verrà sovrascitto il valore di default, altrimenti verrà 
   renderizzato il valore scelto nel modulo figlio.
   assegnare un numero come valore di defaut è più intricato: 
   i numeri possono essere inseriti come stringa '26' o come numero {26}
   ma quando si scrive una {} nella parentesi di una funzione, jsx e js 
   si aspettano di ricevere un oggetto, una coppia key:vaule; 
   scrivere {26} come default creerebbe un errore. 
   E' necessario scrivere il default di un numero come stringa. 
*/

createRoot(document.getElementById("root")).render(<App />)

