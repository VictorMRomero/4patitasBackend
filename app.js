const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello word')
});
app.get('*', (req, res) => {
    res.send('404')
});


app.listen(port, () => {
    console.log(`Ejemplo de app escuchando en localhost:${port}`)
});