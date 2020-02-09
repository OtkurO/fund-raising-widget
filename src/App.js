import React from 'react';
import Tooltip from './components/Tooltip';
import BoxFrame from './components/BoxFrame/BoxFrame';
import Store from './contexts/Store';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <h2>The fundraising widget</h2>
        <Store>
          <Tooltip />
          <BoxFrame />
        </Store>
      </div>
    </div>
  );
};

export default App;
