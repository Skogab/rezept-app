
require('dotenv').config();  // Lade Umgebungsvariablen

// IMPORTE - Wir holen uns die installierten Werkzeuge

const express = require("express"); // Express ist ein Webframework für Node.js
const cors = require("cors"); // Erlaubt App-Zugriff

//Server erstellen
const app = express(); // Wir erstellen eine App mit Express

//Middleware - Zusatz-Funktionen für den Server
app.use(cors());  // Erlaube Zugriff von überall
app.use(express.json()); // Verstehe JSON-Daten

// ERSTE ROUTE - Ein Endpunkt zum Testen
app.get('/', (req, res) => {
    // req = request (Anfrage vom Client)
    // res = response (Antwort vom Server)
    res.json({ 
        message: 'Server läuft! 🎉',
        status: 'OK'
    });
});

// SERVER STARTEN
const PORT = process.env.PORT || 5000;  // Nimm PORT aus .env oder 5000
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});