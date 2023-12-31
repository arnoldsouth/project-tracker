import React, { useEffect, useState } from 'react';

import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Homepage from './home/Homepage';
import ProjectPage from './projects/ProjectPage';
import { Provider } from 'react-redux';
import { store } from './state';

function App() {
  return (
    // Provide the store
    <Provider store={store}>
      <Router>
        <header className="sticky">
          <span className="logo">
            <img
              src="/assets/favicon/android-chrome-512x512.png"
              alt="logo"
              width="49"
              // height="99"
            />
          </span>

          <NavLink to="/" className="button rounded">
            <span className="icon-home"></span>
            Home
          </NavLink>

          <NavLink to="/projects" className="button rounded">
            Projects
          </NavLink>
        </header>

        <div className="container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
