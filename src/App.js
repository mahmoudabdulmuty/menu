import { useState } from 'react';
import Categories from './components/Categories/';
import Menu from './components/Menu/';
import items from './data';

function App() {
	const [menuItems, setMenuItems] = useState(items);
	const allCategories = items.map((item) => item.category);
	const uniqueCategories = ['all', ...new Set(allCategories)];

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items);
		} else {
			setMenuItems(items.filter((item) => item.category === category));
		}
	};

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories categories={uniqueCategories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
