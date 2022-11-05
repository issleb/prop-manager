const parseAirUrl = (url) => {
    const paths = new URL(url).pathname.split('/');

    if (paths[1] === "rooms") {
        const params = paths[2].split('?');

        const room = {
            id: params[0]
        }

        return room;
    }
    
}

const Parser = {
    parseAirUrl
};

export default Parser;