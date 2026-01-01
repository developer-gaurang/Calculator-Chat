
/* --- CALCULATOR LOGIC --- */
let display = document.getElementById('display');
let currentInput = "";

function append(val) {
    if (display.value === "0") currentInput = "";
    currentInput += val;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "0";
}

function calculate() {
    // THE SECRET TRIGGER: 314159
    if (currentInput === '314159') {
        document.getElementById('calculator').style.display = 'none';
        document.getElementById('secret-chat').style.display = 'block';
        return;
    }
    try {
        display.value = eval(currentInput);
        currentInput = display.value;
    } catch {
        display.value = "Error";
        currentInput = "";
    }
}

function closeChat() {
    // Reloads page to reset everything
    location.reload();
}

/* --- CHAT LOGIC (PeerJS) --- */
let peer = null;
let conn = null;

// Helper to turn a password into a safe ID
function generateId(prefix, password) {
    // Simple hash replacement to make ID URL-safe
    let cleanPass = password.replace(/[^a-zA-Z0-9]/g, '');
    return prefix + '-' + cleanPass;
}

function startHosting() {
    let roomName = document.getElementById('room-name').value;
    if (!roomName) return alert("Please enter a room name");

    let myId = generateId('host', roomName);

    document.getElementById('status-msg').style.color = 'orange';
    document.getElementById('status-msg').innerText = "Creating room... wait.";

    peer = new Peer(myId);

    peer.on('open', (id) => {
        document.getElementById('status-msg').style.color = 'green';
        document.getElementById('status-msg').innerText = "Room Created! Waiting for friend...";
    });

    peer.on('error', (err) => {
        console.log(err);
        if (err.type === 'unavailable-id') {
            document.getElementById('status-msg').innerText = "Room name taken. Try a harder password.";
        } else {
            document.getElementById('status-msg').innerText = "Connection Error. Refresh and try again.";
        }
    });

    peer.on('connection', (c) => {
        conn = c;
        setupChatInterface();
    });
}

function joinRoom() {
    let roomName = document.getElementById('room-name').value;
    if (!roomName) return alert("Please enter the room name");

    // Guests just need a random ID to connect
    peer = new Peer();

    peer.on('open', (id) => {
        let hostId = generateId('host', roomName);
        document.getElementById('status-msg').innerText = "Searching for room...";

        conn = peer.connect(hostId);

        // If connection opens immediately
        conn.on('open', () => {
            setupChatInterface();
        });

        // If connection errors (host not found)
        peer.on('error', (err) => {
            document.getElementById('status-msg').innerText = "Room not found. Is your friend hosting?";
        });
    });
}

function setupChatInterface() {
    document.getElementById('setup-panel').style.display = 'none';
    document.getElementById('chat-window').style.display = 'flex';

    // Listen for data
    conn.on('data', (data) => {
        addBubble(data, 'their-msg');
    });
}

function sendMsg() {
    let input = document.getElementById('msg-input');
    let msg = input.value;
    if (!msg || !conn) return;

    conn.send(msg);
    addBubble(msg, 'my-msg');
    input.value = '';
}

function addBubble(text, className) {
    let div = document.createElement('div');
    div.className = `message-bubble ${className}`;
    div.innerText = text;
    document.getElementById('messages-list').appendChild(div);
    // Auto scroll to bottom
    let list = document.getElementById('messages-list');
    list.scrollTop = list.scrollHeight;
}