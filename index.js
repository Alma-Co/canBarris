var express = require('express');
var db = require('./queries.ts');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', function (request, response) {
    response.json({ info: 'Node.js, Express, and Postgres API' });
});
app.get('/plants', db.getPlants);
app.get('/plants/:id', db.getPlantById);
app.post('/plants', db.createPlant);
app.put('/plants/:id', db.updatePlant);
app["delete"]('/plants/:id', db.deletePlant);
app.listen(port, function () {
    console.log("App running on port ".concat(port, "."));
});
