import { useState } from 'react'
import './App.css'




import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="sidebar">

        <nav id="menu">
          <a href="#">perception</a>
          <a href="#">deception</a>
        </nav>
      </div>

      <div id="sidebar2">
      <nav id="menu">
          <a href="#">entropy</a>
          <a href="#">decay</a>
        </nav>
      </div>


      <div id='header'></div>
      <div id="contentmain"> 
       
        {/* Your main content here */}
      </div>

      <div id="content2">
        {/* Content for content2 */}
      </div> 
    </div>
  );
}


export default App
