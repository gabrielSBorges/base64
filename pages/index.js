import { useState } from "react";

export default function Home() {
	const [text, setText] = useState("");
	const [result, setResult] = useState("");

	return (
		<div className="app-container">
			<input 
				type="text" 
				id="text" 
				className="app-input" 
				onChange={event => setText(event.target.value)} 
			/>

			<section className="app-button-container">
				<button 
					type="button"
					className="app-button"
					onClick={() => setResult(btoa(text))}
				>
					<span>ENCODE</span>
				</button>

				<button 
					type="button" 
					className="app-button" 
					onClick={() => setResult(atob(text))}
				>
					<span>DECODE</span>
				</button>
			</section>

			<input 
				type="text" 
				id="result" 
				className="app-input" 
				placeholder="Resultado..."
				value={result}
				disabled
			/>
		</div>
	);
}