import React from "react";
import "./styles/style.scss";
import Header from "./components/Header";
import Panel from "./components/Panel";
import NumberField from "./components/NumberField";

function App() {
  return (
    <div className="App">
      <Header />
      <Panel name="Controller">
        <NumberField />
      </Panel>
    </div>
  );
}

export default App;
