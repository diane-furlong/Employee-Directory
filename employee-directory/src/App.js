import React, { useState } from "react"
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "./components/Row"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Row>
          </Row>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
