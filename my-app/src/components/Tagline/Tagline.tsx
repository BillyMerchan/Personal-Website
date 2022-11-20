import React, { FC, useState } from 'react';
import './Tagline.scss'

const Tagline: FC = () => {
  return (
    <div className="Tagline">
        <DynamicText/>
    </div>
  );
}

function DynamicText(){
    return(
        <div className="DynamicContainer">
            <ul className="DynamicTextList">
                <li style={{color: '#61BB46'}}><span>Comp Sci Student</span></li>
                <li style={{color: '#963D97'}}><span>Web Developer</span></li>
                <li style={{color: '#F5821F'}}><span>Linux Enthusiast</span></li>
                <li style={{color: '#009DDC'}}><span>Open Sourcerer</span></li>
            </ul>
        </div>
    )
}

export default Tagline;
