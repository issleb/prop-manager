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

// Gonna be harder to parse this one, id param is at same level as other routes.
// https://www.vrbo.com/9682530ha?
const parseVrboUrl = (url) => {
    const paths = new URL(url).pathname.split('/');
    const params = paths[1].split('?');

    const room = {
        id: params[0]
    }

    return room;
}

const Parser = {
    parseAirUrl,
    parseVrboUrl
};

export default Parser;