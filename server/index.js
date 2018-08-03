const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', express.static('./public'))
app.use('/restaurant/:id', express.static('./public'));


app.listen(port, () => {
  console.log(`server running at: http://127.0.0.1:${port}`);
});
