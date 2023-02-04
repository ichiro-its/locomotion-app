import React, { useState } from 'react';
import Header from './components/Header';
import LocomotionConfig from './components/LocomotionConfig';
import LocomotionContext from './context/LocomotionContext';

function App() {
  const [locomotion, setLocomotion] = useState({
    RightKick: {
      target_pan: 0,
      target_tilt: 0,
    },
    Position: {
      max_a: 0,
      min_ly: 0,
      max_ry: 0,
      min_x: 0,
      max_x: 0,
      min_ry: 0,
      max_ly: 0,
    },
    LeftKick: {
      target_tilt: 0,
      target_pan: 0,
    },
    Move: {
      min_x: 0,
      max_y: 0,
      max_x: 0,
      max_a: 0,
    },
    Follow: {
      min_tilt_: 0,
      max_x: 0,
      max_a: 0,
    },
    Pivot: {
      target_tilt: 0,
      max_x: 0,
      max_ry: 0,
      max_ly: 0,
      min_x: 0,
      max_a: 0,
    },
    Dribble: {
      max_x: 0,
      max_a: 0,
      min_ry: 0,
      max_ly: 0,
      max_ry: 0,
      min_ly: 0,
      min_x: 0,
    },
  });

  const setLocomotionValue = (name, key, value) => {
    setLocomotion((prevState) => ({ ...prevState, [name]: { ...prevState[name], [key]: value } }));
  };

  return (
    <LocomotionContext.Provider value={{
      locomotion,
      setLocomotion,
      setLocomotionValue,
    }}
    >
      <Header />
      <LocomotionConfig />
    </LocomotionContext.Provider>
  );
}

export default App;
