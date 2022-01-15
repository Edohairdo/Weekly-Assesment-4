import React, { useState } from "react";

const Child2 = (props) => {
  //render value from counter to determine the number of cards that display
  let [displayGrid, setDisplayGrid] = useState(false);
  let [isBlack, setIsBlack] = useState(false);

  const toggleDisplayHandler = () => {
    setDisplayGrid((prevState) => {
      return !prevState;
    });
  };

  const toggleBlackHandler = () => {
    setIsBlack((prevState) => {
      return !prevState;
    });
  };

  let cards = [];
  for (let i = 0; i < props.counting; i++) {
    cards.push(
      <div
        key={i + 1}
        style={{
          border: "1px solid #000",
          margin: "8px",
          padding: "18px",
          background: isBlack ? "#333" : "#fff",
          color: isBlack ? "#fff" : "#333"
        }}
      >
        <h4>Card #{`${i}`}</h4>
      </div>
    );
  }

  return (
    <div className="my-list">
      <h3>My List</h3>
      <div>
        <button type="button" onClick={toggleDisplayHandler}>
          Grid/List
        </button>
        <button type="button" onClick={toggleBlackHandler}>
          Black/White
        </button>
        {/* card block start here */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: displayGrid ? "1fr 1fr 1fr" : "1fr"
          }}
        >
          {cards}
        </div>
        {/* card block ends here */}
      </div>
    </div>
  );
};

export default Child2;
