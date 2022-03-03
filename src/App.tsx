import React, { useCallback, useState } from "react";
import "./App.css";

import LaunchList from "./components/LaunchList";
import LaunchProfile from "./components/LaunchProfile";

function App() {
  const [breed, setBread] = useState("affenpinscher");
  const handleChange = useCallback((newBread) => {
    setBread(newBread);
  }, []);
  return (
    <div className="App">
      <LaunchList handleChange={handleChange} />
      <LaunchProfile breed={breed} />
    </div>
  );
}

export default App;
