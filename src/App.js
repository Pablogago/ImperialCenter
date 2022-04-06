import './App.scss';
import React, { useState } from 'react';
import Drawer from './components/Drawer';
import Content from './components/content/Index';
function App() {
	const [ menuSelected, setMenuSelected ] = useState({ name: 'planets', img: '', id: 1 });
	return (
		<div className="App">
			<Drawer setMenuSelected={setMenuSelected} />
			<Content menuSelected={menuSelected} />
		</div>
	);
}

export default App;