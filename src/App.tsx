import React from "react";
import "./App.css";

import LaunchList from "./components/LaunchList";
import LaunchProfile from "./components/LaunchProfile";

function App() {
  return (
    <div className="App">
      <LaunchList />
      <LaunchProfile />
    </div>
  );
}

export default App;
