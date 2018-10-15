import * as React from "react";
import './style.css';

const NavItems = (props) => {
    return (
        <ul id={props.id} className='NavItems'>
            <li  className='NavItems-LI'><a href={props.link1}>{props.nav1}</a></li>      
            <li  className='NavItems-LI'><a href={props.link2}>{props.nav2}</a></li>                                 
        </ul>
    );
}

export default NavItems;