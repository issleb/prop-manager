import * as data from "../data/api.json";

const getRoom = (roomId) => {
    const properties = data.properties;

    const room = properties.find(({ id }) => id === roomId);
    return room;
}

const Data = {
    getRoom
};

export default Data;