import React, { useState } from 'react';
import {
  BridgeProvider, BridgeConnection, LoggerProvider, NodeProvider, SessionProvider, ClientProvider,
} from 'kumo-app';
import Header from './components/Header';

import LocomotionContext from './context/LocomotionContext';
import LocomotionSettings from './LocomotionSettings';

function App() {
  const [locomotion, setLocomotion] = useState({
    right_kick: {
      target_pan: 0,
      target_tilt: 0,
    },
    position: {
      max_a: 0,
      min_ly: 0,
      max_ry: 0,
      min_x: 0,
      max_x: 0,
      min_ry: 0,
      max_ly: 0,
    },
    left_kick: {
      target_tilt: 0,
      target_pan: 0,
    },
    move: {
      min_x: 0,
      max_y: 0,
      max_x: 0,
      max_a: 0,
    },
    follow: {
      min_tilt_: 0,
      max_x: 0,
      max_a: 0,
    },
    pivot: {
      target_tilt: 0,
      max_x: 0,
      max_ry: 0,
      max_ly: 0,
      min_x: 0,
      max_a: 0,
    },
    dribble: {
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
      <LoggerProvider>
        <BridgeProvider>
          <BridgeConnection />
          <SessionProvider>
            <NodeProvider nodeName="suiryoku_app">
              <ClientProvider
                serviceType="suiryoku_interfaces/srv/GetConfig"
                serviceName="/suiryoku/config/get_config"
              >
                <Header />
                <LocomotionSettings />
              </ClientProvider>
            </NodeProvider>
          </SessionProvider>
        </BridgeProvider>
      </LoggerProvider>
    </LocomotionContext.Provider>
  );
}

export default App;
import React, { useState } from 'react';
import {
  BridgeProvider, BridgeConnection, LoggerProvider, NodeProvider, SessionProvider, ClientProvider,
} from 'kumo-app';
import Header from './components/Header';

import LocomotionContext from './context/LocomotionContext';
import LocomotionSettings from './LocomotionSettings';

function App() {
  const [locomotion, setLocomotion] = useState({
    right_kick: {
      target_pan: 0,
      target_tilt: 0,
    },
    position: {
      max_a: 0,
      min_ly: 0,
      max_ry: 0,
      min_x: 0,
      max_x: 0,
      min_ry: 0,
      max_ly: 0,
    },
    left_kick: {
      target_tilt: 0,
      target_pan: 0,
    },
    move: {
      min_x: 0,
      max_y: 0,
      max_x: 0,
      max_a: 0,
    },
    follow: {
      min_tilt_: 0,
      max_x: 0,
      max_a: 0,
    },
    pivot: {
      target_tilt: 0,
      max_x: 0,
      max_ry: 0,
      max_ly: 0,
      min_x: 0,
      max_a: 0,
    },
    dribble: {
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
      <LoggerProvider>
        <BridgeProvider>
          <BridgeConnection />
          <SessionProvider>
            <NodeProvider nodeName="suiryoku_app">
              <ClientProvider
                serviceType="suiryoku_interfaces/srv/GetConfig"
                serviceName="/suiryoku/config/get_config"
              >
                <Header />
                <LocomotionSettings />
              </ClientProvider>
            </NodeProvider>
          </SessionProvider>
        </BridgeProvider>
      </LoggerProvider>
    </LocomotionContext.Provider>
  );
}

export default App;
