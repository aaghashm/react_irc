import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import WelcomePage from './Components/WelcomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/welcome/:name" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
