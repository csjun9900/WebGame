import React from "react";
import Game from "./components/Game";
import GlobalStyle from "./global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Game rows={20} columns={10} />
    </div>
  );
}

export default App;
