import React from "react";
import Item from "./Item";

function Book(props) {
  return (
    <Item
      onSelect={props.onSelect}
      product={props.product}
      type={"book"}
      availablePcs={props.availablePcs}
    />
  );
}

export default Book;
