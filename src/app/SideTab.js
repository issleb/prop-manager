import React from 'react';

import "./SideTab.scss";

function SideTab(props) {
    return (
        <div className="tab">
            <div className="tab-content" onClick={props.onClick}>P</div>
        </div>
    );
}

export default SideTab;