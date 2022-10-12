import "./App.css";
import Test from "@components/Test";
import React from "react";
import PathNomal from "./components/PathNomal";
// import Test from "base/test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Learn about import path alias</p>
        <Test />
        <PathNomal />
      </header>
    </div>
  );
}

export default App;
