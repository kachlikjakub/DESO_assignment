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
        <tr className="main-row">
          <th className="name">Product name</th>
          <th className="amount">Number of items</th>
          <th className="price">Price</th>
        </tr>
        {unique.map((product) => {
          return (
            <tr key={product.code} className="book-row">
              <td className="book-name">{product.name}</td>
              <td className="amount">
                {product.inStock}
                <button
                  onClick={() => {
                    props.onSelect(product, true, product.inStock);
                  }}
                >
                  Remove
                </button>
              </td>
              <td className="price">{product.price * product.inStock} CZK</td>
            </tr>
          );
        })}
        <tr className="main-row">
          <th className="name">Total:</th>
          <th className="amount"></th>
          <th className="price">
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
