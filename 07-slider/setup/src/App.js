import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setData] = useState(data);
  const [currIndex, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (currIndex < 0) {
      setIndex(lastIndex);
    } else if (currIndex > lastIndex) {
      setIndex(0);
    }
  }, [currIndex, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(currIndex + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    }
  }, [currIndex]);

  return (
    <section className="section">
      <div className="title">
        <h2><span>/</span> reviews</h2>
      </div>
      <div className="section-center">
        {
          people.map((person, index) => {
            const prevIndex = index + 1 > people.length - 1 ? 0 : index + 1;
            const className = index === currIndex ? 'activeSlide' : prevIndex === currIndex ? 'lastSlide' : 'nextSlide';
            const { id, image, name, title, quote } = person;
            
            return (
              <article key={index} className={className}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })
        }
        <button className="prev" onClick={() => setIndex(currIndex - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(currIndex + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
