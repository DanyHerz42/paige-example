const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',  (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get('/pagina-dos',(req, res) => {
  res.sendFile(__dirname + "/views/paginaDos.html")
});

app.listen(port, () => {
  console.log('Server on port' + port);
})