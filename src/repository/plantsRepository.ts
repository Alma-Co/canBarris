import pool from "../manager/db.js";

class PlantsRepository {

    public static instance: PlantsRepository = new this();
  
    public getAllPlants = async () => {
        try {
            const result = await pool.query('SELECT * FROM plants ORDER BY id ASC');
            return result.rows;
        } catch {
            throw new Error('Error getting plants');
        }
        
    };

    public getPlantById = async (id: string) => {
        try {
            const result = await pool.query('SELECT * FROM plants WHERE id = $1', [parseInt(id)]);
            return result.rows[0];
        } catch {
            throw new Error('Error getting plant by id');
        }
      
    }

    public createPlant = async (req: { name: string; type: string; light: string; water: string; comment: string; }) => {
        try {
            const { name, type, light, water, comment } = req;
            const result = await pool.query('INSERT INTO plants (name, type, light, water, comment) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, type, light, water, comment]);
            return `Plant created successfully!`
        } catch {
            throw new Error('Error creating plant');
        }
    }

    public updatePlant = async (req: { id: string, name: string; type: string; light: string; water: string; comment: string; }) => {
        try {
            const { id, name, type, light, water, comment } = req;
            const result = await pool.query('UPDATE plants SET name = $1 type = $2 light = $3 water = $4 comment = $5 WHERE id = $6', [name, type, light, water, comment, parseInt(id)]);
            return `Plants modified with ID: ${id}`;
        } catch {
            throw new Error('Error updating plant');
        }
    }

    public deletePlant = async (id: string) => {
        try {
            const result = await pool.query('DELETE FROM plants WHERE id = $1', [parseInt(id)]);
            return `Plant with ID: ${id} deleted`;
        } catch {
            throw new Error('Error deleting plant');
        }
    }
}

export default PlantsRepository