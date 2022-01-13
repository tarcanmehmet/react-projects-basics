import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [category, setCategory] = useState('all');
  const categoriesList = ['all', 'breakfast', 'lunch', 'shakes'];
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
            <Categories categories={categoriesList} setCategory={setCategory} />
        </div>
        <div className='section-center'>
          {items.filter(data => {
            if(category === 'all')
              return data.category === data.category;
            else
              return data.category === category;
          }).map(dish => <Menu key={dish.id} {...dish} />)}
        </div>
      </section>
    </main>
  );
}

export default App;
