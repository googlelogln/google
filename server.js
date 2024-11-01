const express = require('express');
const app = express();
const PORT = 5040;

// Middleware untuk mengizinkan CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint untuk login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    // Mencetak data yang diterima ke konsol
    console.log('Received email:', email);
    console.log('Received password:', password);
    
    // Mengirim respons kembali ke klien
    res.json({
        message: 'Login data received',
        email: email, // Menampilkan email yang diterima
        password: password // Menampilkan password yang diterima (hati-hati dengan keamanan)
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
