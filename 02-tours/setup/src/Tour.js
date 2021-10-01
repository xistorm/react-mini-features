import React, { useState } from 'react';

const Tour = ({deleteTour, id, name, info, image, price}) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => setExpand(!expand);
  const deleteThis = () => deleteTour(id);

  return (
    <article className="single-tour">
      <img src={image} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{'$' + price}</h4>
        </div>
        <p>
          {expand ? info : info.slice(0, 200) + '...'}
          <button onClick={handleExpand}>
            {expand ? 'show less' : 'read more'}
          </button>
        </p>
        <button onClick={deleteThis} className="delete-btn">not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
