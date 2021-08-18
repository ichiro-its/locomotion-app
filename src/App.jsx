import React from "react";
import "./styles/style.scss";
import Header from "./components/Header";
import Panel from "./components/Panel";
import Category from "./components/Category";
import Collapsible from "react-collapsible";

const locomotion = {
  RightKick: {
    target_pan: -15.8,
    target_tilt: -5,
  },
  Position: {
    max_a: 5,
    min_ly: 10,
    max_ry: -20,
    min_x: -10,
    max_x: 10,
    min_ry: -10,
    max_ly: 20,
  },
  LeftKick: {
    target_tilt: -5,
    target_pan: 11,
  },
  Move: {
    min_x: 30,
    max_y: 0,
    max_x: 30,
    max_a: 10,
  },
  Follow: {
    min_tilt_: -30,
    max_x: 30,
    max_a: 10,
  },
  Pivot: {
    target_tilt: -5,
    max_x: 10,
    max_ry: -20,
    max_ly: 20,
    min_x: -10,
    max_a: 15,
  },
  Dribble: {
    max_x: 30,
    max_a: 15,
    min_ry: -10,
    max_ly: 20,
    max_ry: -20,
    min_ly: 10,
    min_x: -10,
  },
};

function App() {
  return (
    <div className="App">
      <Header />
      <Panel name="Controller">
        {Object.keys(locomotion).map((item, i) => (
          <Collapsible trigger={item} transitionTime={200} key={i}>
            <Category name={item} fields={locomotion[item]} />
          </Collapsible>
        ))}
      </Panel>
    </div>
  );
}

export default App;
