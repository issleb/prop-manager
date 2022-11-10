import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import "./RoomCard.scss";

function RoomCard(props) {
    const room = props.room;
    console.log("props.room", props.room);


    const renderOccupanyRate = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            We estimate your Occupany Rate is &nbsp;
          <span style={{ color: room.metrics.occupancy.diff < 0 ? "red" : "green" }}>
                                        {room.metrics.occupancy.diff}%
                                    </span>

                                    &nbsp; compared to equivalent properties.
        </Tooltip>
      );

      const renderAdrRate = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            We estimate your Average Daily Rate is &nbsp;
          <span style={{ color: room.metrics.adr.diff < 0 ? "red" : "green" }}>
                                        {room.metrics.adr.diff}%
                                    </span>

                                    &nbsp; compared to equivalent properties.
        </Tooltip>
      );      

    return (
        <Card className="room-card">
            <Card.Img variant="top" src={room.avatar} />
            <Card.Body>
                <Card.Title>{room.name}</Card.Title>
                <Card.Subtitle className="address">{room.address}</Card.Subtitle>

                <div className="room-card-subsection">

                <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderOccupanyRate}
                    >
                        <Card.Text>
                            Occupancy: {room.metrics.occupancy.value}% 
                                    <span style={{ color: room.metrics.occupancy.diff < 0 ? "red" : "green" }}>
                                        ({room.metrics.occupancy.diff}%)
                                    </span>
                        </Card.Text>
                    </OverlayTrigger>


                    <Card.Text>
                    <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderAdrRate}
                    >
                        <Card.Text>
                        ADR: {room.metrics.adr.value} 
                            <span style={{ color: room.metrics.adr.diff < 0 ? "red" : "green" }}>
                                ({room.metrics.adr.diff})
                            </span>
                        </Card.Text>
                    </OverlayTrigger>


                    </Card.Text>
                </div>


                <div className="room-card-subsection">
                    {!room.isAirBnb && (
                        
                        <Card.Text>
                            <a href={room.airbnb.url} target="_blank">View on AirBnb</a>
                        </Card.Text>                        
                    )}
                    {!room.isVrbo && (
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










