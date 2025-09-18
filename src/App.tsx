import React, { useState } from 'react';
import { HoneycombGrid } from "./components/Honeycomb"
import Viewer from "./components/Viewer"
import SkillTree from "./components/SkillTree"
import "./App.css"

const App = () => {

  return (
    <React.Fragment>
      <Viewer>
        <HoneycombGrid />
      </Viewer>
      <Viewer>
        <SkillTree />
      </Viewer>
    </React.Fragment>
  );
};

export default App;