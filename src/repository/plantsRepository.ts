import DatabaseManager from "../manager/db.js";
import pool from "../manager/db.js";
type Request = {
    id?: string;
    name: string;
    type: string;
    light: string;
    water: string;
    comment: string;
}

class PlantsRepository {

    public static instance: PlantsRepository = new this();
  
    public getAllPlants = async () => {
        try {
            const connection = await DatabaseManager.instance.connect();
            const result = await connection.query('SELECT * FROM plants ORDER BY id ASC');

            return result.rows;
        } catch {
            throw new Error('Error getting plants');
        }
        
    };

    public getPlantById = async (id: string) => {
        try {
            const connection = await DatabaseManager.instance.connect();
            const result = await connection.query('SELECT * FROM plants WHERE id = $1', [parseInt(id)]);
            return result.rows[0];
        } catch {
            throw new Error('Error getting plant by id');
        }
      
    }

    public createPlant = async (req: Request) => {
        try {
            const { name, type, light, water, comment } = req;
            const connection = await DatabaseManager.instance.connect();
            const result = await connection.query('INSERT INTO plants (name, type, light, water, comment) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, type, light, water, comment]);
            return result.rows[0].id;
        } catch {
            throw new Error('Error creating plant');
        }
    }

    public updatePlant = async (req: Request) => {
        try {
            const { id, name, type, light, water, comment } = req;
            const connection = await DatabaseManager.instance.connect();
            const result = await connection.query('UPDATE plants SET name = $1 type = $2 light = $3 water = $4 comment = $5 WHERE id = $6', [name, type, light, water, comment, id && parseInt(id)]);
            return `Plants modified with ID: ${id}`;
        } catch {
            throw new Error('Error updating plant');
        }
    }

    public deletePlant = async (id: string) => {
        try {
            const connection = await DatabaseManager.instance.connect();
            const result = await connection.query('DELETE FROM plants WHERE id = $1', [parseInt(id)]);
            return `Plant with ID: ${id} deleted`;
        } catch {
            throw new Error('Error deleting plant');
        }
    }
}

export default PlantsRepository