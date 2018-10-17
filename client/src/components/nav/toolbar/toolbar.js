import * as React from "react";
import { NavItems } from '../../../components';
import './style.css';

const Toolbar = (props) => {
    return (
        <nav className='toolbar'>
            <div className="toolbar-main">
                Zenith Holdings
            </div>

            <div className="toolbar-nav">
            
            </div>
            {props.children}
        </nav>
    );
}

export default Toolbar;