import { useState, useEffect } from "react";
import "./App.css";

const THEMES = ["theme-dark", "theme-light", "theme-ocean", "theme-sunset"];
const THEME_NAMES = ["Escuro", "Claro", "Oceano", "Pôr do Sol"];

export default function App() {
	const [themeIndex, setThemeIndex] = useState(0);

	const themeClass = THEMES[themeIndex];
	const themeName = THEME_NAMES[themeIndex];

	useEffect(() => {
		document.body.className = themeClass;
	}, [themeClass]);

	const cycleTheme = () => {
		setThemeIndex((i) => (i + 1) % THEMES.length);
	};

	return (
		<div className="container">
			<h1>Altere o Tema ({themeName})</h1>
			<button type="button" onClick={cycleTheme}>
				Clique aqui
			</button>
		</div>
	);
}
