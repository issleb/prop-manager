import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import "./RoomCard.scss";

function RoomCard(props) {
    const room = props.room;

    return (
        <Card className="room-card">
            <Card.Img variant="top" src={room.avatar} />
            <Card.Body>
                <Card.Title>{room.name}</Card.Title>
                <Card.Subtitle className="address">{room.address}</Card.Subtitle>

                <div className="room-card-subsection">
                    <Card.Text>
                        Occupancy: {room.metrics.occupancy.value}% 
                                <span style={{ color: room.metrics.occupancy.diff < 0 ? "red" : "green" }}>
                                    ({room.metrics.occupancy.diff}%)
                                </span>
                    </Card.Text>
                    <Card.Text>
                    ADR: {room.metrics.adr.value} 
                            <span style={{ color: room.metrics.adr.diff < 0 ? "red" : "green" }}>
                                ({room.metrics.adr.diff})
                            </span>
                    </Card.Text>
                </div>


                <div className="room-card-subsection">
                    {room.airbnb && (
                        <Card.Text>
                            <a href={room.airbnb.url} target="_blank">View on AirBnb</a>
                        </Card.Text>                        
                    )}
                    {room.vrbo && (
                        <Card.Text>
                            <a href={room.vrbo.url} target="_blank">View on Vrbo</a>
                        </Card.Text>                        
                    )}

                </div>
                
                {/* <ListGroup variant="flush">
                    
                    <ListGroup.Item>

                    </ListGroup.Item>
                    <ListGroup.Item>

                    </ListGroup.Item>
                </ListGroup>                     */}
                {/*  */}
            </Card.Body>
        </Card>
    );
}

export default RoomCard;










