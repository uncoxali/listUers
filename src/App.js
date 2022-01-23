import logo from "./logo.svg";
import { Switch, Route, Link, Router } from "react-router-dom";
import About from "./About";
import { Routes } from "react-router-dom";
import Home from "./Home";
import Component from "./Component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/*" element={<Component />} />
      </Routes>
    </div>
  );
}

export default App;
