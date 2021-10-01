import React from 'react';

const List = ({ name, age, image }) => {
  

  return (
    <div className="person">
      <img src={image} />
      <div className="info">
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default List;
