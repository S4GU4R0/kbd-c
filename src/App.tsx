import React, { useState, useRef } from 'react';
import { NavLink, Routes, Route } from 'react-router';
import { HoneycombGrid } from "./components/Honeycomb"
import Viewer from "./components/Viewer"
import SkillTree from "./components/Tree/SkillTree"

import "./App.css"

const App = () => {
  const scrollRef = useRef(null);

  const handleScroll = (event) => {
    event.preventDefault();
    scrollRef.current.scrollLeft += event.deltaY;
  };
  return (
    <div className="max-w-[100vw]">
      <Routes>
        <Route index element={<HoneycombGrid />} />
        <Route path="/tree" element={<SkillTree />} />
        <Route path="honeycomb" element={<HoneycombGrid />} />


        {/* 
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="tree" element={<SkillTree />} />
            <Route path="honeycomb" element={<HoneycombGrid />} />
          </Route> 
        */}

      </Routes>

      {/* DOCK */}
      <div

        className=" fixed bottom-0 left-0 z-10 w-[100vw] mb-4">
        <div className="w-1/8 hover:w-3/5 rounded-full border-secondary glass min-h-content px-4 mx-auto transition-all delay-150 duration-300 ease-in-out">
          <div
            ref={scrollRef}
            onWheel={handleScroll}
            className="carousel carousel-center w-full space-x-2 min-h-content ">
            {/* dashboard */}
            <NavLink to="/"
              className={({ isActive }) => {
                const classes = "carousel-item badge hover:badge-xl transition-all duration-300 delay-150 ease-in-out   glass"
                return isActive ? "active " + classes : classes
              }
              }
            >
              <svg className="size-[1.2em] [&>*]:fill-secondary [&>*]:stroke-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="miter" strokeLinecap="butt">
                  <polyline points="1 11 12 2 23 11" fill="none" stroke-miterlimit="10" strokeWidth="2"></polyline>
                  <path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></path>
                  <line x1="12" y1="22" x2="12" y2="18" fill="none" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></line>
                </g>
              </svg>
            </NavLink>

            <NavLink to="/honeycomb"
              className={({ isActive }) => {
                const classes = "carousel-item badge hover:badge-xl transition-all duration-300 delay-150 ease-in-out   glass"
                return isActive ? "active " + classes : classes
              }
              }
            >
              {/* <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
              {/* hexagon icon */}
              <svg className="size-[1.2em]  min-h-[1.2em] min-w-[1.2em] [&>*]:stroke-secondary" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0287 2.5396C11.6328 2.20402 12.3672 2.20402 12.9713 2.5396L19.9713 6.42849C20.6062 6.78123 21 7.45047 21 8.17681V15.8232C21 16.5495 20.6062 17.2188 19.9713 17.5715L12.9713 21.4604C12.3672 21.796 11.6328 21.796 11.0287 21.4604L4.02871 17.5715C3.39378 17.2188 3 16.5495 3 15.8232V8.17681C3 7.45047 3.39378 6.78123 4.02871 6.42849L11.0287 2.5396Z" strokeWidth="2" />
              </svg>
            </NavLink>

            {/* custom views */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
              return (
                <NavLink to="/honeycomb"
                  className={({ isActive }) => {
                    const classes = "carousel-item badge hover:badge-xl transition-all duration-300 delay-150 ease-in-out   glass"
                    return isActive ? "active " + classes : classes
                  }
                  }
                  key={`custom-${item}`} >
                  <svg className="size-[1.2em]  min-h-[1.2em] min-w-[1.2em] [&>*]:fill-secondary [&>*]:stroke-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" stroke-miterlimit="10" strokeWidth="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></rect></g></svg>
                </NavLink>
              )
            })}
            {/* an option for each individual widget */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
              return (
                <NavLink to="/honeycomb"
                  className={({ isActive }) => {
                    const classes = "carousel-item badge hover:badge-xl transition-all duration-300 delay-150 ease-in-out   glass"
                    return isActive ? "active " + classes : classes
                  }
                  }
                  key={`widget-${item}`}
                >
                  <svg className="size-[1.2em] min-h-[1.2em] min-w-[1.2em] [&>*]:fill-secondary [&>*]:stroke-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" stroke-miterlimit="10" strokeWidth="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></rect></g></svg>
                </NavLink>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;