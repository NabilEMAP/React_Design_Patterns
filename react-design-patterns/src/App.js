import { DangerButton, BigSuccessButton, Button } from "./composition";

function App() {
	return (
		<>
			<DangerButton text="Danger Button"/>
			<BigSuccessButton text="Big Success Button"/>
			<Button text="Regular Button" size="medium" color="#ffff00"/>
		</>
	);
}

export default App;
