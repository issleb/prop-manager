import React from 'react';

const onClick= () => {
    console.log('You clicked me!')
};

function SideTab(props) {
    return (
        <div className="tab">
            <div className="tab-content" onClick={onClick}></div>
        </div>
    );
}

export default SideTab;