import React, { useState } from 'react';
import data from './data';

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [paragraphsAmount, setParagraphsAmount] = useState(0);

  const handleInput = (event) => {
    setParagraphsAmount(event.target.value);
  }

  const generateText = (event) => {
    event.preventDefault();

    let newParagraphs = [];
    const len = Math.min(paragraphsAmount, data.length);
    for (let i = 0; i < len; ++i) {
      newParagraphs.push(data[i]);
    }

    setParagraphs(newParagraphs);
  }
  
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input id="amount" type="number" name="amount" defaultValue={paragraphsAmount} onChange={handleInput}></input>
        <button className="btn" onClick={generateText}>generate</button>
      </form>

      <article className="lorem-text">
        {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </article>
    </section>
  )
}

export default App;
