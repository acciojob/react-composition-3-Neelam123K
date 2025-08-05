
import React from "react";
import './../styles/App.css';
import Tooltrip from "./Tooltrip";

const App = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
        {/* Do not remove the main div */}
        <Tooltrip text="This is a tooltip!">
          <h2>Hover over me</h2>
        </Tooltrip>

        <br/>

        <Tooltrip text="Another tooltip message">
          <p>Hower over me to see another tooltip</p>
        </Tooltrip>
    </div>
  )
}

export default App
