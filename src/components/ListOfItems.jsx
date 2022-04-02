import React from "react";
import Item from "./Item";

function ListOfItems(props) {
  const unique = [
    ...new Map(props.products.map((item) => [item.code, item])).values(),
  ];
  unique.forEach((uniqueBook) => {
    uniqueBook.inStock = props.products.filter(
      (item) => item.code === uniqueBook.code && item.inCart === false
    ).length;
  });

  return (
    <div className={"book-list"}>
      {unique.length <= 0 ? (
        <h1>No Items in this section</h1>
      ) : (
        unique.map((product) => {
          return (
            <Item
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
