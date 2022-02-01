import { useState } from 'react';
import Categories from './components/Categories/';
import Menu from './components/Menu/';
import items from './data';

function App() {
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState([]);
	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories categories={categories} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
