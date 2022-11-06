import React from 'react';

import "./SideTab.css";

const onClick= () => {
    console.log('You clicked me!')
};

function SideTab(props) {
    return (
        <div className="tab">
            <div className="tab-content" onClick={onClick}>P</div>
        </div>
    );
}

export default SideTab;