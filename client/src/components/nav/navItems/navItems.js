import * as React from "react";
import './style.css';
import { NavItem } from '../../../components';

const NavItems = (props) => {
    return (
        <ul id={props.id} className='NavItems'>
            <NavItem link='/'>PHP</NavItem>      
            <NavItem link='/'>Javascript</NavItem>                            
            <NavItem link='/'>CSS</NavItem>                            

        </ul>
    );
}

export default NavItems;