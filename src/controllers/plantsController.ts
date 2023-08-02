import { Request, Response } from 'express';
import pool from '../manager/db.js';
import PlantsService from '../service/plantsService.js';


class PlantsController {

    public static instance: PlantsController = new this();

    public getAllPlants = async (_req: Request, res: Response) => {
        try {
            const plants = await PlantsService.instance.getAllPlants();
            return res.json(plants);
        } catch (err) {
            res.send(err);
        }
    }    
    
    public getPlantById = async (req: Request, res: Response) => {
        try {
            const plant = await PlantsService.instance.getPlantById(req.params.id);
            return res.json(plant);
        } catch (err) {
            res.send(err);
        }
    }

    public createPlant = async (req: Request, res: Response) => {
        try {
            const result = await PlantsService.instance.createPlant(req.body);
            return res.json(result);
        } catch (err) {
            res.send(err);
        }
    }

    public updatePlant = async (req: Request, res: Response) => {
        try{
            const result = await PlantsService.instance.updatePlant(req.body);
            return res.json(result);
        } catch (err) {
            res.send(err);
        }
    }

    public deletePlant = async (req: Request, res: Response) => {
        try {
            const result = await PlantsService.instance.deletePlant(req.params.id);
            return res.json(result);
        } catch (err) {
            res.send(err);
        }
    }

}

export default PlantsController;