import React from 'react';
import { Home } from './home/components/Home';
import { MonchStatistic } from './monchStatistic/home/components/MonchStatistic';

import { Routes, Route } from 'react-router-dom';
import { Header } from './shared/Header/Header';
import { Popup } from './shared/Popup/Popup';

function App() {
  return (
    <div className="global-container">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Home />
        <Routes>
          {/* <Route path="/Home" Component={Home} /> */}
          <Route path="/MonchStatistic" Component={MonchStatistic} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
