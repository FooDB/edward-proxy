const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 55055;

app.use(express.static(path.join(__dirname, './public')));
app.use('/restaurant/:id/', express.static('./public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET');
  next();
});

app.listen(port, () => {
  console.log(`server running at: http://127.0.0.1:${port}`);
});