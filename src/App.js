import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./components/Calculator";
import "./components/Calculator.css";
import History from "./components/History";

const App = () => {
  const [history, setHistory] = useState([]);

  const addToHistory = (calculation) => {
    setHistory([...history, calculation]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculator addToHistory={addToHistory} />} />
        <Route path="/history" element={<History history={history} />} />
      </Routes>
    </Router>
  );
};

export default App;
