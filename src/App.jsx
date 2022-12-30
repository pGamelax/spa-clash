import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/player" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
