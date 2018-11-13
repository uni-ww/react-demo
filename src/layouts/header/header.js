import React from 'react';
import './header.css';

function header(props) {
    return (
        <div className="w-header">
            <div className="w-header-place"></div>
            <div className="w-header-box">
                <div className="w-header-left"></div>
                <div className="w-header-center">1-{props.title}</div>
                <div className="w-header-right"></div>
            </div>
        </div>
    )
}
export default header;