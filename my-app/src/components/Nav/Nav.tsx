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
                <li><a href="/account">Account</a></li>
                <li><a href="/account">Account</a></li>
                <li><a href="/account">Account</a></li>
                <li><a href="/account">Account</a></li>
            </ul>
        </div>
    )
}

function MenuIconButton(){
    const [open, setOpen] = useState(false);
    function stateChange() {
        setOpen(!open);
    }
    return(
        <span>
            <span className="MenuIcon" onClick={stateChange}><GiHamburgerMenu/></span>
            {open && <NavMenu/>}
        </span>
    )
}

export default Nav;
