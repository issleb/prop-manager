import React from 'react';

import "./SideBar.css";

function SideBar(props) {
    return (
        <div className="pm-bar" onClick={props.onClick}>
        </div>
    );
}

export default SideBar;