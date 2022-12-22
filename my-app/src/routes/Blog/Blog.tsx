import React from 'react';
import './Blog.scss';
import Nav from '../../components/Nav/Nav'

function Blog() {
  return (
    <div className="SubPage">
      <Nav/>
      <h1 className="subPageTitle">Blog</h1>
      <div className="Blog">
        <BlogEntry Month="Dec" Day="22" Title="Looking back on 2022"
        Blurb="Going into 2022, I had a few objectives, notably participating in my first hackathon along with building
           my professional profile. As such, this website was born..."/>
      </div>
    </div>
  );
}

function BlogDate(props){

  return(
    <div className="BlogDateBox">
      <h2>{props.Month}</h2>
      <h1>{props.Day}</h1>
    </div>
  )
}

function BlogBlurb(props){

  return(
    <div className="BlogBlurb">
      <h1>{props.Title}</h1>
      <p>{props.Blurb}</p>
    </div>
  )
}

function BlogEntry(props) {

  return (
    <div className="BlogEntry">
      <BlogDate Month={props.Month} Day={props.Day}/>
      <BlogBlurb Title={props.Title} Blurb={props.Blurb}/>
    </div>
  )
}

export default Blog;
