import './App.css';
import React, { useState } from 'react';
import Count from "./Components/Count";
import {Provider} from 'react-redux'
function App() {
 
  return (
    <div className="App">
     <Count />
    </div>
  );
}

export default App;
