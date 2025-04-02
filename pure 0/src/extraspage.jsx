// src/ExtrasPage.jsx
import React from 'react';
import './App.css'; // Import the same CSS as App.jsx

function ExtrasPage() {
  return (
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
          <a href="/">home</a>
        </nav>
      </div>

      <div id="header">extra links</div>
      <div id="contentmain">
        {/* Content for contentmain on ExtrasPage */}
      </div>

      <div id="content2">
        {/* Content for content2 on ExtrasPage */}
      </div>
    </div>
  );
}

export default ExtrasPage;