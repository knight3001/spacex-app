import React, { useCallback, useState } from "react";
import { ApolloConsumer } from "@apollo/client";
import "./App.css";

import LaunchList from "./components/LaunchList";
import LaunchProfile from "./components/LaunchProfile";

function App() {
  const [breed, setBread] = useState(null);
  const handleChange = useCallback((newBread) => {
    setBread(newBread);
  }, []);
  return (
    <div className="App">
      <ApolloConsumer>
        {(client) => <button onClick={() => client.clearStore()}>Reset</button>}
      </ApolloConsumer>
      <LaunchList handleChange={handleChange} breed={breed} />
      {breed !== null && <LaunchProfile breed={breed} />}
    </div>
  );
}

export default App;
