import React, { useState } from "react";
function Item({ onSelect, product, availablePcs }) {
  const [numOfPcs, setNumOfPcs] = useState(0);
  return (
    <div className="book-card">
      <img className="book-img" src={product.image} />
      <p className="book-name">{product.name}</p>
      <p className="book-description">{product.description}</p>
      <div style={{ width: "100%" }}>
        <p className="book-price">
          {product.price} CZK ({availablePcs} available)
        </p>
        <div className="book-add-section">
          <input
            className="book-input"
            style={{ width: "75px" }}
            type="number"
            value={numOfPcs}
            onChange={(e) => {
              setNumOfPcs(e.target.value);
            }}
            min={0}
            max={availablePcs}
          />
          <button
            disabled={numOfPcs <= 0 || numOfPcs > availablePcs}
            onClick={() => {
              onSelect(product, false, numOfPcs);
              setNumOfPcs(0);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
