import React from "react";

export const Tile = (props) => {

  const object = props.info;
  const values = Object.values(object)

  const info = values.map((value, index) => {
    let className;
    if (index === 0) {
      className='title-title';
    } else {
      className='title'
    }
    return <p key={index} className={className}>{value}</p>
  });

  return (
    <div className="tile-container">
      {info}
    </div>
  );
};

export default Tile;