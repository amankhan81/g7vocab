
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import UnitPage from './components/UnitPage';
import { UNIT_5_DATA, UNIT_6_DATA } from './data/vocabData';

const App: React.FC = () => {
  return (
    <Router>
      <div className="antialiased text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/unit-5" element={<UnitPage data={UNIT_5_DATA} />} />
          <Route path="/unit-6" element={<UnitPage data={UNIT_6_DATA} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
