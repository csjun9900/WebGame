import React from "react";
import Game from "./components/Game";
import GlobalStyle from "./global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Game cols={10} rows={20} />
    </div>
  );
}

export default App;
