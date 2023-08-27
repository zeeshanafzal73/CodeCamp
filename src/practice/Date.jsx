import React from "react";

export const DateApp = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOut;
  const style ={
    fontSize : "100px"
  }
  if (hours < 12) {
    timeOut = "Good morning";
    style.color = "#FF8C00"
  } else if (hours > 12 && hours < 17) {
    timeOut = "Good afternoon";
    style.color = "#FF8C00"
  } else {
    timeOut = "Good evening";
    style.color = "#FF8C00"
  }
  return (
    <>
      <h1 style={style}>Hello, Vannesa {timeOut}</h1>
    </>
  );
};
