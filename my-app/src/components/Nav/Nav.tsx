import React, { FC, useState } from 'react';
import './Nav.scss';
import { GiHamburgerMenu } from 'react-icons/gi'

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
                <li><a href="/account">Home</a></li>
                <li><a href="/account">Projects</a></li>
                <li><a href="/account">Blog</a></li>
                <li><a href="/account">Contact</a></li>
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
