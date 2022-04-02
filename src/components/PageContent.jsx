import React from "react";
import Cart from "./Cart";
import ListOfItems from "./ListOfItems";

function PageContent(props) {
  console.log();

  let index = props.availableWindows.find(
    (item) => item.name == props.activeWindow
  );
  if (index == undefined) {
    return <Cart products={props.products} onSelect={props.onSelect} />;
  }
  return (
    <ListOfItems
      products={props.products.filter((item) => item.type == index.tag)}
      onSelect={props.onSelect}
    />
  );
}

export default PageContent;
