import React from 'react';

import "./SideTab.css";

function SideTab(props) {
    return (
        <div className="tab">
            <div className="tab-content" onClick={props.onClick}>P</div>
        </div>
    );
}

export default SideTab;