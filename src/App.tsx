import React from "react";
import "./App.css";
import Form from "./Components/Form";

function App() {
  return (
    <div>
      <div className="header">
        <p>
          Ad<span className="title">-Maker</span>
        </p>
      </div>
      <Form />
    </div>
  );
}

export default App;
