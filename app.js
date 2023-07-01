require('dotenv').config();
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello word')
});
app.get('*', (req, res) => {
    res.send('404')
});


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en: ${process.env.PORT}`)
});