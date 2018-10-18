import * as React from "react";
import { NavItems } from '../../../components';
import './style.css';

const Toolbar = (props) => {
    return (
        <nav className='toolbar'>
            <div className="toolbar-sticky">
                Codecan
            </div>

            <div className="toolbar-bottom">
                <NavItems />
            </div>
            {props.children}
        </nav>
    );
}

export default Toolbar;