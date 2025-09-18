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
      <Viewer key={2}>
        <SkillTree />
      </Viewer>
      <div className="dock dock-xs overflow-x-hidden">
        {/* dashboard */}
        <button>
          <svg className="size-[1.2em] [&>*]:fill-secondary [&>*]:stroke-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="miter" strokeLinecap="butt">
              <polyline points="1 11 12 2 23 11" fill="none" stroke-miterlimit="10" strokeWidth="2"></polyline>
              <path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></path>
              <line x1="12" y1="22" x2="12" y2="18" fill="none" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></line>
            </g>
          </svg>
        </button>

        <button>
          {/* <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
          {/* hexagon icon */}
          <svg className="size-[1.2em] stroke-secondary" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0287 2.5396C11.6328 2.20402 12.3672 2.20402 12.9713 2.5396L19.9713 6.42849C20.6062 6.78123 21 7.45047 21 8.17681V15.8232C21 16.5495 20.6062 17.2188 19.9713 17.5715L12.9713 21.4604C12.3672 21.796 11.6328 21.796 11.0287 21.4604L4.02871 17.5715C3.39378 17.2188 3 16.5495 3 15.8232V8.17681C3 7.45047 3.39378 6.78123 4.02871 6.42849L11.0287 2.5396Z" stroke-width="2" />
          </svg>
        </button>

        {/* custom views */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
          return (
            <button key={`custom-${item}`} className="dock badge ">
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" stroke-miterlimit="10" strokeWidth="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></rect></g></svg>
            </button>
          )
        })}
        {/* an option for each individual widget */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
          return (
            <button key={`widget-${item}`} className="dock badge ">
              <svg className="size-[1.2em] min-h-[1.2em] min-w-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" stroke-miterlimit="10" strokeWidth="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></rect></g></svg>
            </button>
          )
        })}

        <button>
          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></circle><path d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></path></g></svg>
        </button>
      </div>
    </React.Fragment>
  );
};

export default App;