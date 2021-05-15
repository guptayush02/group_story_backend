const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const server = require('http').Server(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

var api = require('./app/routes/api')(app, express);
app.use('/api', api);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

server.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port 3000!`));
