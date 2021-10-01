import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const amount = 10;
  const defaultColor = '#f15025'

  const [color, setColor] = useState(defaultColor);
  const [colorList, setColorList] = useState(new Values(defaultColor).all(amount));
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setColor(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    try {
      const newColorList = new Values(color).all(amount);
      setColorList(newColorList);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form>
          <input 
            className={(error ? 'error' : 'null')} 
            type="text" 
            placeholder={defaultColor}
            onChange={handleChange}
          >
          </input>
          <button 
            type="submit" 
            className="btn" 
            onClick={handleSubmit}
          >submit</button>
        </form>
      </section>
      <section className="colors">
        {
          colorList.map((item, index) => <SingleColor key={index} {...item} />)
        }
      </section>
    </>
  )
}

export default App
