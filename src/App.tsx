import React from "react";
import "./App.css";
import Heading from "./components/advanceProps/Heading";
import ParrentHeading from "./components/advanceProps/ParrentHeading";
import Status from "./components/advanceProps/Status";

function App() {
  return (
    <div className="App">
      <Status status="loding" />
      <Heading>Hello I m heading</Heading>
      <ParrentHeading>
        <Heading>Hello I m Parrent heading</Heading>
      </ParrentHeading>
    </div>
  );
}

export default App;
