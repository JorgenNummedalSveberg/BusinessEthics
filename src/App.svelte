<script>
    let ws;

    function connectWebsocket() {
        ws = new WebSocket('wss:/api/websocket');

        ws.addEventListener('open', (event) => {
            console.log('WebSocket connection established.');
        });

        ws.addEventListener('message', (event) => {
            const messageData = JSON.parse(event.data);
            console.log(messageData); // Process the message data as needed
        });

        ws.addEventListener('close', (event) => {
            console.log('WebSocket connection closed.');
        });

        ws.addEventListener('error', (event) => {
            console.error('WebSocket error:', event.error);
        });
    }

    function disconnectWebsocket() {
        ws.close();
    }

    function sendMessage() {
        const messageData = {
            // Add the message data here
        };

        ws.send(JSON.stringify(messageData));
    }
</script>

<button on:click={connectWebsocket}>Connect WebSocket</button>
<button on:click={disconnectWebsocket}>Disconnect WebSocket</button>
<button on:click={sendMessage}>Send Message</button>
