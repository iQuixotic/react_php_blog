import * as React from "react";
import './style.css';
import { NavItem } from '../../../components';

const NavItems = (props) => {
    return (
        <ul id={props.id} className='NavItems'>
            <NavItem link='/lang=php'>PHP</NavItem>      
            <NavItem link='/lang=js'>Javascript</NavItem>                            
            <NavItem link='/lang=css'>CSS</NavItem>             
        </ul>
    );
}

export default NavItems;