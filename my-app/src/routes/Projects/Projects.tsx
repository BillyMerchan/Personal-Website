import React from 'react';
import './Projects.scss';
import Nav from '../../components/Nav/Nav'
import { Outlet, Link } from 'react-router-dom'

import Hackathon_Thumb from '../../images/Hackathon_Thumb.png'

function Projects() {
  return (
    <div className="SubPage">
      <Nav/>
        <h1 className="subPageTitle">Projects</h1>
      <div>
        <ProjectCards/>
      </div>
    </div>
  );
}

function ProjectCards() {
  return(
    <div className="Grid">
      <Card title="Hackathons" img={Hackathon_Thumb} redirect="/Projects/Hackathons"/>
      <Card title=""/>
      <Card title=""/>
      <Card title=""/>
    </div>
  )
}

function Card(props) {
  return(
    <Link to={props.redirect}>
      <div className="Card">
        <img className = "Thumb" src={props.img}/>
        <h1 className="ProjectTitle">{props.title}</h1>
      </div>
    </Link>
  )
}

export default Projects;
