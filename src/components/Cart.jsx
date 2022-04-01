import React from "react";

function Cart(props) {
  console.log(props);
  const unique = [
    ...new Map(
      props.products
        .filter((item) => item.inCart == true)
        .map((item) => [item.code, item])
    ).values(),
  ];
  unique.forEach((uniqueBook) => {
    uniqueBook.inStock = props.products.filter(
      (item) => item.code === uniqueBook.code && item.inCart === true
    ).length;
  });
  return (
    <table className="cart-list">
      <thead>
        <tr>
          <th>Product name</th>
          <th>Number of items</th>
          <th>Price</th>
        </tr>
        {unique.map((product) => {
          return (
            <tr key={product.code}>
              <td>{product.name}</td>
              <td>
                {product.inStock}
                <button
                  onClick={() => {
                    props.onSelect(product, true, product.inStock);
                  }}
                >
                  Remove
                </button>
              </td>
              <td>{product.price * product.inStock} CZK</td>
            </tr>
          );
        })}
        <tr>
          <th>Total:</th>
          <th></th>
          <th>
            {unique.reduce(
              (partialSum, a) => partialSum + a.price * a.inStock,
              0
            )}{" "}
            CZK
          </th>
        </tr>
      </thead>
    </table>
  );
}

export default Cart;
