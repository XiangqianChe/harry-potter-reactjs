// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import WizardPage from './pages/WizardPage';
import { WizardProvider } from './context/WizardContext';

const App = () => {
  return (
    <Router>
      <WizardProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/characters/:id" element={<WizardPage />} />
          </Routes>
        </div>
      </WizardProvider>
    </Router>
  );
};

export default App;
