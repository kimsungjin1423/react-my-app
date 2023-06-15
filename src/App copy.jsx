import React from "react";

import Header from "./components/Header";
import CSSModule from "./components/CSSModule";

function App() {
  const name = "둘리";
  const userInfo = {
    name: "이름",
    age: 30,
  };

  const sayHello = () => {
    alert(`안녕 ${name}`);
  };

  const style = {
    color: "blue",
    backgroundColor: "yellow",
    textDecoration: "underline",
    border: "1px solid",
    padding: "10px",
  };

  const btnStyle = {
    backgroundColor: "#4caf50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  };

  return (
    <>
     <CSSModule />
      <Header />
      <h1 style={{ color: "red", background: "pink" }}>App</h1>
      <h1 style={style}>app</h1>
      <p style={style}>content</p>
      <p>{name}</p>
      <p>
        이름은 {userInfo.name}이고 나이는 {userInfo.age}입니다.
      </p>
      <button style={btnStyle} onClick={sayHello}>
        버튼 이벤트
      </button>
    </>
  );
}

export default App;
