// express laden
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// router holen
const router = require('./todo');

// app objekt erzeugen
const app = express();

// use morgan logger
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  {
    flags: 'a',
  },
);
app.use(morgan('combined', { stream: accessLogStream }));

// configure body parser
app.use(bodyParser.urlencoded({ extended: false }));

// static middleware einbinden, um statische daten auszuliefern (/public Verzeichnis)
app.use(express.static('./public'));

app.set('view engine', 'ejs');

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
