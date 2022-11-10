import React from 'react';
import "./SideBar.scss";
import RoomCard from "./Room/RoomCard"
import Card from 'react-bootstrap/Card';

function SideBar(props) {
    return (
        <div className="pm-sidebar">
            <Card>
                <Card.Header onClick={props.onClick}>PropertyManager</Card.Header>
                <Card.Body>            
                    <RoomCard room={props.room}></RoomCard>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SideBar;