import React, { Component } from "react";
import { ItemList } from "./ItemList";
import { ItemData } from "./ItemData";

class ItemRender extends Component {
  constructor() {
    super();
    this.state = {
      data: ItemData,
    };
  }

  handler = (id) => {
    this.setState((prevState) => {
      const updatedData = prevState.data.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });

      return { data: updatedData };
    });
  };

  render() {
    const collectData = this.state.data.map((item) => (
      <ItemList itemdata={item} key={item.id} handler={this.handler} />
    ));

    return <>{collectData}</>;
  }
}

export default ItemRender;
