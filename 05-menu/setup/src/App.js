import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const categories = ['all', ...Array.from(new Set(items.map(item => item.category)))];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredData = () => activeCategory === 'all' ? items : items.filter(item => item.category === activeCategory);
  const selectCategory = (category) => setActiveCategory(category);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories selectCategory={selectCategory} categories={categories} />
        <Menu data={filteredData()} />
      </section>
    </main>
  );
}

export default App;
