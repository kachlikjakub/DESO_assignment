import React from "react";
import Cart from "./Cart";
import ListOfItems from "./ListOfItems";

function PageContent(props) {
  let index = props.allStates.availableWindows.find(
    (item) => item.name == props.allStates.activeWindow
  );
  // if item not found, Cart is generated
  if (index == undefined) {
    return (
      <Cart products={props.allStates.products} onSelect={props.onSelect} />
    );
  }
  // otherwise it is generated active screen with <ListOfItems>
  return (
    <ListOfItems
      products={props.allStates.products.filter(
        (item) => item.type == index.tag
      )}
      onSelect={props.onSelect}
    />
  );
}

export default PageContent;
