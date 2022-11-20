import React from 'react';
import './styles/App.scss';
import Nav from './components/Nav/Nav'
import Tagline from './components/Tagline/Tagline'

function App() {
  return (
    <div className="App">
    <Nav/>
      <header className="App-header">
        <h1 className="Title">Billy Merchan</h1>
        <Tagline/>
      </header>
    </div>
  );
}

export default App;
