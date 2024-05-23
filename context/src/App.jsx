
import { createRoot } from 'react-dom/client'
import { Clock } from './Clock'

function App() {


	return (
		<div>
				<Clock />
		</div>
	)
}

createRoot(document.getElementById("root")).render(<App />)
