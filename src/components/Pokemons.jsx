import React from "react";

function Pokemons() {
  return (
    <div className="container">
      <div>Pokemons</div>
      <div className="pokemin-list">
        <div className="item">
          <img src="./images/000101.png" alt="이상해씨" />
        </div>
        <div className="item">
          <img src="./images/000401.png" alt="파이리" />
        </div>
        <div className="item">
          <img src="./images/000701.png" alt="꼬부기" />
        </div>
      </div>
    </div>
  );
}

export default Pokemons;
