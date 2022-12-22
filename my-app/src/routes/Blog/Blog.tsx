import React from 'react';
import './Blog.scss';
import Nav from '../../components/Nav/Nav'

function Blog() {
  return (
    <div className="SubPage">
      <Nav/>
      <h1 className="subPageTitle">Blog</h1>
      <div className="Blog">
        <BlogEntry Month="Jan" Day="13"/>
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

function BlogBlurb(){

  return(
    <div className="BlogBlurb">
sdfsdf
    </div>
  )
}

function BlogEntry(props) {

  return (
    <div className="BlogEntry">
      <BlogDate Month={props.Month} Day={props.Day}/>
      <BlogBlurb/>
    </div>
  )
}

export default Blog;
