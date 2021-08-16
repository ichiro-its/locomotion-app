import React from "react";
import "./styles/style.scss";
import Header from "./components/Header";
import Panel from "./components/Panel";

function App() {
  return (
    <div className="App">
      <Header />
      <Panel name="Controller" />
    </div>
  );
}

export default App;
