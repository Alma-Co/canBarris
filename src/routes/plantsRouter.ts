import express, { Router } from 'express';
import PlantsController from '../controllers/plantsController.js';


const router = Router();

router.get('/plants', PlantsController.instance.getAllPlants);

router.get('/plants/:id', PlantsController.instance.getPlantById);

router.post('/plants', PlantsController.instance.createPlant);

router.put('/plants/:id', PlantsController.instance.updatePlant);

router.delete('/plants/:id', PlantsController.instance.deletePlant);


export default router;