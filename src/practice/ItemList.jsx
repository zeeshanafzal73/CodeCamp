import React from "react";

export const ItemList = (props) => {
  const handleChange = () => {
    props.handler(props.itemdata.id);
  };

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <input
        type="checkbox"
        checked={props.itemdata.completed}
        onChange={handleChange}
      />
      <p>
        {props.itemdata.detail} {props.itemdata.price}
      </p>
    </div>
  );
};
