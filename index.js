// express laden
const express = require('express');

// app objekt erzeugen
const app = express();

app.get('/', (req, res) => {
  res.json('Hello World');
});

// an einen port binden
app.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
