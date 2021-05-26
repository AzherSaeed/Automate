import React from 'react';
import './AnimatedButton.css'
import {Link} from 'react-router-dom'
const AnimatedButton = (props) => {
    return (
        <div>
            <Link to="/" className="bton bton-white" onClick={props.onClick} >{props.title}</Link>
        </div>
    )
}

export default AnimatedButton;