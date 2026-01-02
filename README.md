<img width="1565" height="850" alt="image" src="https://github.com/user-attachments/assets/419e7c1d-ba22-4743-9147-e567be68ad2a" /># Calculator-Chat
Stealth-Comms is a secure, P2P chat application disguised as a functional calculator. Using PeerJS (WebRTC), it establishes direct, serverless connections between users. Conversations are triggered by a secret code, ensuring visual privacy and zero data logging. Perfect for ephemeral, private communication without a digital footprint.
<img width="1565" height="850" alt="image" src="https://github.com/user-attachments/assets/747247ab-ce4a-42f9-9e56-6f02d7c15c19" />



Stealth-Comms: The Secure P2P Vault Chat
Stealth-Comms is a privacy-first communication tool designed to provide a completely deniable and secure messaging environment. It cleverly masquerades as a fully functional, standard calculator to ensure visual privacy in any setting.

✨ Key Features
Social Engineering Disguise The app loads as a standard, high-fidelity calculator. The secure interface remains invisible until the user enters a specific mathematical trigger (default: 314159) and presses the equals button.

True Peer-to-Peer (P2P) Messaging Built on WebRTC technology via PeerJS, the app establishes a direct data tunnel between two browsers. Your messages travel directly to your peer, bypassing central servers entirely.

Zero-Log Architecture Privacy is the default. There are no databases, no registration processes, and no server-side storage. Once the session is closed or the page is refreshed, all conversation data is permanently purged from the local DOM.

Serverless Handshaking Users connect by simply sharing a unique "Room Name". This acts as a private handshake to bridge the connection without requiring account creation or exchange of personal identifiers.

🛠️ Technical Stack
Component	Technology
Frontend	Vanilla HTML5 / CSS3 (Flexbox & Grid)
Logic	JavaScript ES6+
Connectivity	PeerJS (WebRTC abstraction)
Icons/UI	iOS-inspired minimalist design

Export to Sheets

🚀 Quick Start Guide
Deployment: Host the index.html on any static provider (GitHub Pages, Vercel, or Netlify).

The Trigger: Enter the code 314159 on the calculator keypad and press =.

Establish Connection:

Host: Enter a unique Room Name and click Create Room.

Guest: Enter the same Room Name and click Join Room.

Secure Exit: Use the "Exit / Close" button or refresh the page to instantly wipe all history.

🔒 Security Disclaimer
This project is an ephemeral communication tool. While it offers high levels of privacy by removing the "middleman," users should always ensure their room names are unique and complex to prevent unauthorized joining.

Would you like me to help you generate a preview image or a GIF to show off the smooth transition from the calculator to the chat?
