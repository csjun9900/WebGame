import React, { useState } from "react";
import Header from "./components/header";
import Board from "./components/board";

function App() {
  // const [turn, setTurn] = useState("X");

  return (
    <>
      <Header />
      <Board />
    </>
  );
}

export default App;
