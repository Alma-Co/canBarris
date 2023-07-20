import express, { Router } from 'express';
import Plants from '../controllers/plantsController.js';

const router = Router();

router.get('/plants', async(req: express.Request, res: express.Response) => {
    let plants = await new Plants().getPlants();
    return res.json(plants);
});

router.get('/plants/:id', async(req: express.Request, res: express.Response) => {
    let { id } = req.params;
    let plant = await new Plants().getPlantById(id);
    return res.json(plant);
});

router.post('/plants', async(req: express.Request, res: express.Response) => {
    let { name, type, light, water, comment } = req.body;
    let plant = await new Plants().createPlant({ name, type, light, water, comment });
    return res.json(plant);
});

router.put('/plants/:id', async(req: express.Request, res: express.Response) => {
    let { id } = req.params;
    let { name, type, light, water, comment } = req.body;
    let plant = await new Plants().updatePlant({ id, name, type, light, water, comment });
    return res.json(plant);
});

router.delete('/plants/:id', async(req: express.Request, res: express.Response) => {
    let { id } = req.params;
    let plant = await new Plants().deletePlant(id);
    return res.json(plant);
});

export default router;