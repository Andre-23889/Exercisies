import { createRoot } from 'react-dom/client'
import { Hello } from './1'
import { Message } from './2'

 function App() {
	return(
		<div>
			<Hello />
			<Hello />
			<Message />
		</div>
	)
}

createRoot(document.getElementById("root")).render( <App />)

/* si può fare il rendering nello stesso file di un modulo,
l'importante è che la funzione del modulo non esporti
ma ritorni soltanto.*/

/*inoltre si può comodamente utilizzare un modulo più volte 
l'utilità dei moduli consiste proprio in questo
l'importante è che questi moduli siano sempre raccolti in un tag genitore*/