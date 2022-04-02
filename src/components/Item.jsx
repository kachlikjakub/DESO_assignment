import React, { useState } from "react";
function Item({ onSelect, product, availablePcs }) {
  //state numOfPcs to be informed about value in text input
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
            value={numOfPcs}
            onChange={(e) => {
              setNumOfPcs(e.target.value);
            }}
            //max, min, and possible values in input file defined
            min={0}
            max={availablePcs}
            type="number"
          />
          <button
            //button disabled if set number out of possible range
            disabled={numOfPcs <= 0 || numOfPcs > availablePcs}
            onClick={() => {
              //after product added to cart, state numOfPcs reset to 0
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
