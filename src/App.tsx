import React, { useCallback, useState } from "react";
import "./App.css";

import LaunchList from "./components/LaunchList";
import LaunchProfile from "./components/LaunchProfile";

function App() {
  const [id, setId] = useState(42);
  const handleChange = useCallback((newId) => {
    setId(newId);
  }, []);
  return (
    <div className="App">
      <LaunchList handleChange={handleChange} />
      <LaunchProfile id={id} />
    </div>
  );
}

export default App;
