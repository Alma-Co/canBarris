import PlantsRepository from "../repository/plantsRepository.js";

class PlantsService {

    public static instance: PlantsService = new this();

    public getAllPlants = () => PlantsRepository.instance.getAllPlants();

    public getPlantById = (id: string) => PlantsRepository.instance.getPlantById(id);

    public createPlant = (req: { name: string; type: string; light: string; water: string; comment: string; }) => PlantsRepository.instance.createPlant(req);

    public updatePlant = (req: { id: string, name: string; type: string; light: string; water: string; comment: string; }) => PlantsRepository.instance.updatePlant(req);

    public deletePlant = (id: string) => PlantsRepository.instance.deletePlant(id);

}

export default PlantsService