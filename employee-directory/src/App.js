import React from "react"
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import DirectoryContainer from "./components/DirectoryContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Directory</h1>
          <DirectoryContainer></DirectoryContainer>
      </header>
    </div>
  );
}

export default App;
