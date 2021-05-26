import React from 'react';
import './navToogler.css'
const NavToogler = (props) => (
    <div className="button-main" >
         <button className="toggle-button" onClick={props.showNavPopupHandler} >
        <div className="toggle-button-line" ></div>
        <div className="toggle-button-line" ></div>
        <div className="toggle-button-line" ></div>
    </button>
    </div>
)

export default NavToogler;