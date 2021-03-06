const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});

const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Listening on ${port}`));