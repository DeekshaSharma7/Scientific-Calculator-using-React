import React from "react";
import "./Calculator.css";

import { Link } from "react-router-dom";

const History = ({ history }) => {
  return (
    <div className="history">
      <h2>Calculation History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Link to="/" className="history-link">Back to Calculator</Link>
    </div>
  );
};

export default History;
