import React from "react";
import Cart from "./Cart";
import ListOfItems from "./ListOfItems";

function PageContent(props) {
  console.log(props);
  if (props.activeWindow == "Book") {
    return <ListOfItems products={props.products} onSelect={props.onSelect} />;
  }
  if (props.activeWindow == "Cart") {
    return <Cart products={props.products} onSelect={props.onSelect} />;
  }
}

export default PageContent;
