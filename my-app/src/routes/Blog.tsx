import React from 'react';
//import './styles/App.scss';
import Nav from '../components/Nav/Nav'
import Tagline from '../components/Tagline/Tagline'
import Links from '../components/Links/Links'

function Blog() {
  return (
    <div className="App">
    <Nav/>
      <header className="App-header">
        <h1 className="Title">Blogs</h1>
        <Tagline/>
        <Links/>
      </header>
    </div>
  );
}

export default Blog;
