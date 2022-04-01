import React from "react";
import TopBarItem from "./TopBarItem";
import ".././styles.css";

function TopBar({ availableWindows, onSelect }) {
  return (
    <div className="navbar">
      <TopBarItem
        className="books-btn"
        windows={availableWindows[0]}
        onSelect={onSelect}
      />
      <p>My book shop</p>
      <TopBarItem
        className="cart-btn"
        windows={availableWindows[2]}
        onSelect={onSelect}
      />
    </div>
  );
}

export default TopBar;
