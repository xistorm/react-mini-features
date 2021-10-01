import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const directions = { PREV: 'prev', NEXT: 'next', RANDOM: 'random' };
  const [person, setPerson] = useState(0);
  const { name, job, image, text } = people[person];

  const slide = (direction) => {
    switch(direction) {
      case directions.PREV:
        slidePrev();
        break;
      case directions.NEXT:
        slideNext();
        break;
      case directions.RANDOM:
        slideRandom();
        break;
      default:
        break;
    }
  }

  const slidePrev = () => {
    let newPerson = person > 0 ? person - 1 : people.length - 1;
    setPerson(newPerson);
  }

  const slideNext = () => {
    let newPerson = person < people.length - 1 ? person + 1 : 0;
    setPerson(newPerson);
  }

  const slideRandom = () => {
    let newPerson;
    do {
      newPerson = Math.floor(Math.random() * (people.length - 1));
    } while (newPerson === person);
    setPerson(newPerson);
  }

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => slide(directions.PREV)}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => slide(directions.NEXT)}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => slide(directions.RANDOM)}>surprise me</button>
    </article>
  );
};

export default Review;
