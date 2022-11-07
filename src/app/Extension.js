import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import SideTab  from "./SideTab";

function Extension (props) {

    const [showTab, setShowTab] = useState(true);
    
    const onClick = () => {
        setShowTab(!showTab);
    };

    if(showTab) {
        return (
            <SideTab onClick={onClick} />
        );
    } else {
        return (
            <SideBar onClick={onClick} />
        );
    }
}

export default Extension;