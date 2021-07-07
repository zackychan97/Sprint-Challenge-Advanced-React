import React from "react";
import "./App.css";
import Players from "./Component/Players";
import DarkModeToggler from "./Component/DarkModeToggler";

function App() {
  return (
    <div className="App">
      <DarkModeToggler />
      <Players />
    </div>
  );
}

export default App;