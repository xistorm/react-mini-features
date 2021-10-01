import React, { useState } from 'react';
import Tour from './Tour';

const Tours = ({ data }) => {
  const [tours, setTours] = useState(data);

  const deleteTour = (id) => {
    const newTours = tours.filter(item => item.id !== id);
    setTours(newTours);
  }

  const refresh = () => {
    setTours(data);
  }

  return (
    tours.length ? (
      <section>
        {
          tours.map(item => {
            const {id, name, info, image, price} = item;

            return <Tour deleteTour={deleteTour} key={id} id={id} name={name} info={info} image={image} price={price} />
          })
        }
      </section>
    ) : (
      <button className="btn" onClick={refresh}>Refresh</button>
    )
  )
};

export default Tours;
