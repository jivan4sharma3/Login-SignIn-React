import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
