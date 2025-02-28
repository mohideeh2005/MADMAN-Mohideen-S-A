
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'game.html'));
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Game server running on port 3000');
});
