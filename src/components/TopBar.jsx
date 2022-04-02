import React from "react";
import TopBarItem from "./TopBarItem";
import ".././styles.css";

function TopBar({ onSelect, availableWindows }) {
  return (
    <div className="navbar">
      <div className="books-div">
        {availableWindows.map((windows) => {
          console.log(windows);
          return (
            <TopBarItem
              className="books-btn"
              windows={windows}
              onSelect={onSelect}
            />
          );
        })}
      </div>
      <p>My book shop</p>
      <TopBarItem
        className="cart-btn"
        windows={{
          tag: "Cart",
          name: "Cart",
          image: "/Users/jakubkachlik/applicant-test-react-master/src/cart.png",
        }}
        onSelect={onSelect}
      />
    </div>
  );
}

export default TopBar;
