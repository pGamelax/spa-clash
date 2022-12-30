import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './Pages/Profile'

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
