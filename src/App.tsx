import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ModelBuilder from './pages/ModelBuilder';
import Dashboard from './pages/Dashboard';
import Community from './pages/Community';
import Documentation from './pages/Documentation';
import ModelHistory from './pages/ModelHistory';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/build" element={<ModelBuilder />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/community" element={<Community />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/history" element={<ModelHistory />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;