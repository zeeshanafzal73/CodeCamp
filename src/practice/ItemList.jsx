import React from "react";

export const ItemList = (props) => {
  const handleChange = () => {
    props.handler(props.itemdata.id);
  };
  const component = {
    fontStyle: "italic",
    color: "#03658c",
    textDecoration: "line-through",
  };
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <input
        type="checkbox"
        checked={props.itemdata.completed}
        onChange={handleChange}
      />
      <p style={props.itemdata.completed ? component:null}>
        {props.itemdata.detail} {props.itemdata.price}
      </p>
    </div>
  );
};
