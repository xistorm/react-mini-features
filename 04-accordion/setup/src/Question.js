import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [active, setActive] = useState(false);

  const expandQuestion = () => setActive(!active);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={expandQuestion}>
          {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {active &&<p>{info}</p>}
    </article>
  );
};

export default Question;
