import React from "react";
import Item from "./Item";

function ListOfItems(props) {
  //rendering each title only once, computing unique items
  const unique = [
    ...new Map(props.products.map((item) => [item.code, item])).values(),
  ];
  unique.forEach((uniqueBook) => {
    //added property inStock for each unique title to show how many items are available
    uniqueBook.inStock = props.products.filter(
      (item) => item.code === uniqueBook.code && item.inCart === false
    ).length;
  });

  return (
    <div className={"book-list"}>
      {unique.length == 0 ? (
        //if there are no items in section, return staticly generated announce
        <h1>No Items in this section</h1>
      ) : (
        //otherwise each unique item in section is generated
        unique.map((product) => {
          return (
            <Item
              key={product.code}
              onSelect={props.onSelect}
              product={product}
              availablePcs={product.inStock}
            />
          );
        })
      )}
    </div>
  );
}

export default ListOfItems;
