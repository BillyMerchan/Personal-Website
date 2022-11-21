import React from 'react';
//import './styles/App.scss';
import Nav from '../components/Nav/Nav'
import { Outlet, Link } from 'react-router-dom'

function Hackathons() {
  return (
    <div className="App">
    <Nav/>
      <header className="App-header">
        <h1 className="Title">Hackathons</h1>
      </header>
    </div>
  );
}

export default Hackathons;
