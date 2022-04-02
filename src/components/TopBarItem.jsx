import React from "react";
import ".././styles.css";
import picture from ".././cart.png";

function TobBarItem({ className, windows, onSelect }) {
  //render image navBar if image set
  if (windows.image) {
    return (
      <button
        className={"cart-btn"}
        onClick={() => {
          onSelect(windows.tag);
        }}
      >
        <img className="cart-img" alt={windows.name} src={picture} />
      </button>
    );
  }

  //otherwise render navBar item as basic <p>
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
