import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [persons, setData] = useState(data);

  const handleDelete = () => {
    setData([]);
  }

  return (
    <div className="container">
      <h3>{persons.length} birthdays</h3>
      {
        persons.map(item => {
          const { id, name, age, image } = item;

          return <List key={id} name={name} age={age} image={image} />
        })
      }
      <button onClick={handleDelete}>clear all</button>
    </div>
  )
}

export default App;
