// Prozess bei Änderungen automatisch neu starten
// npm install -g nodemon
// Ausführung: nodemon index.js

// Debugger
// node --inspect-brk index.js
// node --inspect index.js
// in den browser wechseln: chrome://inspect

const http = require('http');

/* don't try this at home
while (true) {
  console.log('working');
}*/

const server = http.createServer((request, response) => {
  response.end('Hello Fisch');
});

server.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
