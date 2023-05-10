import { Server } from 'ws';

export default async function(req) {
    const wss = new Server({ noServer: true });

    wss.on('connection', (ws) => {
        console.log('WebSocket connection established.');

        ws.send(JSON.stringify({
            type: 'welcome',
            message: 'WebSocket connection established.'
        }));

        ws.on('message', (message) => {
            const messageData = JSON.parse(message);
            console.log(messageData); // Process the message data as needed

            // Send a response back to the client if needed
            ws.send(JSON.stringify({
                type: 'response',
                message: 'Message received and processed.'
            }));
        });

        ws.on('close', () => {
            console.log('WebSocket connection closed.');
        });
    });

    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
        wss.emit('connection', ws, req);
    });
}
