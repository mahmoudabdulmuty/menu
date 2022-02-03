import { useState } from 'react';
import Categories from './components/Categories/';
import Menu from './components/Menu/';
import items from './data';

function App() {
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState([]);

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items);
		} else {
			setMenuItems((prevItems) => {
				return prevItems.filter((item) => {
					return item.category === category;
				});
			});
		}
	};

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
