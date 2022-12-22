import React, { FC, useState } from 'react';
import './Nav.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Outlet, Link } from 'react-router-dom'

const Nav: FC = () => {
  return (
    <div>
         <MenuIconButton/>
    </div>
  );
}

function NavMenu(){
    return(
        <div className="NavMenu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </div>
    )
}

function MenuIconButton(){
    const [open, setOpen] = useState(false);
    function stateChange() {
        setOpen(!open);
        if(!open){
       console.log("bruh");
        }
    }
    return(
        <span>
            <span className={!open ? "MenuIconOpen":"MenuIconClosed"} onClick={stateChange}><GiHamburgerMenu/></span>
            {open && <NavMenu/>}
        </span>
    )
}

export default Nav;
