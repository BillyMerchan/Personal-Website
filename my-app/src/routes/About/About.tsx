import React from 'react';
//import './styles/App.scss';
import Nav from '../../components/Nav/Nav'
import Tagline from '../../components/Tagline/Tagline'
import Links from '../../components/Links/Links'

function About() {
  return (
    <div className="SubPage">
    <Nav/>
      <header className="App-header">
        <h1 className="subPageTitle">About Me</h1>
      </header>
    </div>
  );
}

export default About;
