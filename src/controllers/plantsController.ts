import { Response } from 'express';
import pool from '../manager/db.js';


class Plants {
    async getPlants() {
        let result= await pool.query('SELECT * FROM plants ORDER BY id ASC').catch((err: any) => {throw err});
        return result.rows;
    }

    async getPlantById(id: string) {
        let results = await pool.query('SELECT * FROM plants WHERE id = $1', [parseInt(id)]).catch((err: any) => {throw err});
        return results.rows;
    }

    async createPlant(req: { name: any; type: any; light: any; water: any; comment: any; }) {
        const { name, type, light, water, comment } = req;
       await pool.query('INSERT INTO plants (name, type, light, water, comment) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, type, light, water, comment]).catch((err: any) => {throw err});
        return `Plant created successfully!`
    }

    async updatePlant(req: { id: string, name: any; type: any; light: any; water: any; comment: any; }) {
        const { id, name, type, light, water, comment } = req;
        await pool.query('UPDATE plants SET name = $1 type = $2 light = $3 water = $4 comment = $5 WHERE id = $6', [name, type, light, water, comment, parseInt(id)]).catch((err: any) => {throw err});
        return `User modified with ID: ${id}`;
    }

    async deletePlant(id: string) {
        await pool.query('DELETE FROM plants WHERE id = $1', [parseInt(id)]).catch((err: any) => {throw err});
        return `Plant with ID: ${id} deleted`;
    }

}

export default Plants;