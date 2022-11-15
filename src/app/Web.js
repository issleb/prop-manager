import React, { useEffect, useState } from "react";
import RoomCard from "./Room/RoomCard";

import "./styles/_app.scss";

function Web (props) {
    const listItems = props.rooms.map((room) => {
        return <RoomCard room={room}></RoomCard>;
    })

    return (
        <div>{listItems}</div>
    );
}

export default Web;