
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'htide',
  host: 'localhost',
  database: 'canbarris',
  password: 'password',
  port: 5432,
})

const getPlants = (request, response) => {
    pool.query('SELECT * FROM plants ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getPlantById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM plants WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const createPlant = (request, response) => {
    const { name, type, light, water, comment } = request.body
  
    pool.query('INSERT INTO plants (name, type, light, water, comment) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, type, light, water, comment], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }

  const updatePlant = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, type, light, water, comment } = request.body
  
    pool.query(
      'UPDATE plants SET name = $1 type = $2 light = $3 water = $4 comment = $5 WHERE id = $6',
      [name, type, light, water, comment, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  const deletePlant = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

    module.exports = {
        getPlants,
        getPlantById,
        createPlant,
        updatePlant,
        deletePlant,
        }