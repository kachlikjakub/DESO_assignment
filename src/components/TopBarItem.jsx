import React from "react";
import ".././styles.css";
import picture from ".././cart.png";

function TobBarItem({ className, windows, onSelect }) {
  if (windows.image) {
    return (
      <button
        className={className}
        onClick={() => {
          onSelect(windows.tag);
        }}
      >
        <img className="cart-img" alt={"Cart"} src={picture} />
      </button>
    );
  }
  return (
    <p
      className={className}
      onClick={() => {
        onSelect(windows.tag);
      }}
    >
      {windows.name}
    </p>
  );
}

export default TobBarItem;
