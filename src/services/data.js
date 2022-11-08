import * as data from "../data/api.json";

const getRoom = (roomId) => {
    const properties = data.properties;

    const room = properties.find(({ id }) => id === roomId);
    return room;
}

const getRoomByAir = (roomId) => {
    const properties = data.properties;

    const room = properties.find(({ airbnb }) => airbnb?.id === roomId);
    return room;
}

const getRoomByVrbo = (roomId) => {
    const properties = data.properties;

    const room = properties.find(({ vrbo }) => vrbo?.id === roomId);
    return room;
}

const Data = {
    getRoom,
    getRoomByAir,
    getRoomByVrbo
};

export default Data;