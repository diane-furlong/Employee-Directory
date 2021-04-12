import React, { useState } from "react"
import './App.css';
import Container from "./components/Container";
// import 'bootstrap/dist/css/bootstrap.min.css';
import DirectoryContainer from "./components/DirectoryContainer";

function App() {
  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <DirectoryContainer></DirectoryContainer>
  
    </div>
  );
}

export default App;
