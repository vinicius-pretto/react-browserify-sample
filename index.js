const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve() + 'public/index.html');
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});