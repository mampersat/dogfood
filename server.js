'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world<br>This is M@<br>testing build tag');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
