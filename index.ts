const express = require('express')
const db = require('./queries.ts')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/plants', db.getPlants)
app.get('/plants/:id', db.getPlantById)
app.post('/plants', db.createPlant)
app.put('/plants/:id', db.updatePlant)
app.delete('/plants/:id', db.deletePlant)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
