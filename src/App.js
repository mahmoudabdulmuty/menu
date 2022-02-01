import { useState } from 'react';
import Categories from './components/Categories/';
import Menu from './components/Menu/';
import items from './data';

function App() {
	const [state, setState] = useState(0);
	return (
		<>
			<Categories />
			<Menu />
			{console.log(items)}
		</>
	);
}

export default App;
