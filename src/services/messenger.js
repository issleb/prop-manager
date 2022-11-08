const listen = (port, name, action) => {
    port.onMessage.addListener(async (message) => {
        if (message.type === name) {
            await action(message);
        }
    });
};

const send = (port, name, params) => {
    const message = {
        type: name,
        ...params
    }

    port.postMessage(message);
};

const Messenger = {
    listen,
    send
};

export default Messenger;