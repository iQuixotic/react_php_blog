import * as React from "react";
import { NavItems, Input } from '../../../components';
import './style.css';

const Toolbar = (props) => {
    return (
        <nav className='toolbar'>
            <div className="toolbar_sticky">
                <div className="toolbar_logo">
                    Codecan            
                </div>
                <div className="toolbar_search">
                    <Input/>         
                </div>
            </div>
            <div className="toolbar_bottom">
                <NavItems />
            </div>
            {props.children}
        </nav>
    );
}

export default Toolbar;