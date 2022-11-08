import React from 'react';
import "./SideBar.css";

function SideBar(props) {
    return (
        <div className="pm-bar" onClick={props.onClick}>
            <div>{props.room.name}</div>
            <div>{props.room.address}</div>
        </div>
    );
}

export default SideBar;