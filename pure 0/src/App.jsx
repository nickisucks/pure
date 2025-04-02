import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ExtrasPage from './ExtrasPage'; // Import the ExtrasPage component

function App() {
  return (
    <Router>
      <div className="App">
        <div id="sidebar">
          <nav id="menu">
            <a href="https://nickisucks.github.io/magic-8ball/">magic 8-ball</a>
            <a href="https://nickisucks.github.io/emo-username-generator/">username generator</a>
          </nav>
        </div>

        <div id="sidebar2">
          <nav id="menu">
            <a href="#">entropy</a>
            <Link to="/extras">extras</Link> {/* Use Link here! */}
          </nav>
        </div>

        <div id="header">social suicide resources</div>
        <div id="contentmain">
          {/* Content for contentmain */}
        </div>

        <div id="content2">
          {/* Content for content2 */}
        </div>
        <Routes>
          <Route path="/extras" element={<ExtrasPage />} /> {/* Route for ExtrasPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;