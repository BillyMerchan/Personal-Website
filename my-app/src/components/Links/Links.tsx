import React, { FC, useState } from 'react';
import './Links.scss';
import GitHubLogo from '../../images/GitHub_Logo.png'
import LinkedInLogo from '../../images/LinkedIn_Logo.png'

const Links: FC = () => {
  return (
    <div className="LinksContainer">
        <a href="https://github.com/BillyMerchan"><img className="logo"
        src={GitHubLogo} alt="Link to personal Github"/></a>
        <a href="https://www.linkedin.com/in/billy-merchan-403298211/"><img className="logo"
        src={LinkedInLogo} alt="Link to personal Linkedin"/></a>
    </div>
  );
}
export default Links;
