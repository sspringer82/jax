// express laden
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// router holen
const router = require('./todo');

// app objekt erzeugen
const app = express();
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  {
    flags: 'a',
  },
);
app.use(morgan('combined', { stream: accessLogStream }));

// static middleware einbinden, um statische daten auszuliefern (/public Verzeichnis)
app.use(express.static('./public'));

// routing funktion auf http://localhost:8080/
/*app.get('/', (req, res) => {
  // expliziter Breakpoint mit debugger;
  res.json('Hello World');
});*/

app.use('/todo', router);

// an einen port binden
app.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
