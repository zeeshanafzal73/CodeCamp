import React from "react";
import { Content } from './../practice/Content'

export const Props = () => {

  return (
    <>
      <Content
        contact={{
          name: "zeeshan",
          email: "zee@gmail.com",
          phone: "+923064347137",
          address: "Lahore",
        }}
      />
      <Content
        contact={{
          name: "noman",
          email: "nomi@gmail.com",
          phone: "+923064347137",
          address: "Lahore",
        }}
      />
    </>
  );
};
