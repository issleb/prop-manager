import React, { useState } from "react";
import { MESSAGES } from "../../constants.js";

import "./Toolkit.scss";

function Toolkit(props) {
    const [show, setShow] = useState(true);
    const isDev = process.env.NODE_ENV === "development";

    const onRefresh = () => {
        props.sendMessage(MESSAGES.TOOLKIT_REFRESH);
    }

    const onHide = () => {
        setShow(false);
    }    

    return (
        isDev && show && (
        <div className="toolkit">
            <div className="toolkit-content">
                <div className="toolkit-content-header">Extension Toolkit</div>
                <div  className="toolkit-content-body">
                    <div onClick={onRefresh}>Refresh</div>
                    <div onClick={onHide}>Hide</div>
                </div>
            </div>
        </div>
    ));
}

export default Toolkit;