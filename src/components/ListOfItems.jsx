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
      {unique.map((product) => {
        return (
          <Item
            key={product.code}
            product={product}
            availablePcs={
              props.products.filter((item) => item.code == product.code).length
            }
          />
        );
      })}
    </div>
  );
}

export default ListOfItems;
