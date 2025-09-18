import React, { useState } from 'react';
import { HoneycombGrid } from "./components/Honeycomb"
import Viewer from "./components/Viewer"
import SkillTree from "./components/Tree/SkillTree"
import "./App.css"

const App = () => {

  return (
    <React.Fragment>
      <Viewer key={1}>
        <HoneycombGrid />
      </Viewer>
      {/* <Viewer key={2}>
        <SkillTree />
      </Viewer> */}
    </React.Fragment>
  );
};

export default App;