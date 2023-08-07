import PlantsRepository from "../repository/plantsRepository.js";
type Request = {
    id?: string;
    name: string;
    type: string;
    light: string;
    water: string;
    comment: string;
}
class PlantsService {

    public static instance: PlantsService = new this();

    public getAllPlants = () => PlantsRepository.instance.getAllPlants();

    public getPlantById = (id: string) => PlantsRepository.instance.getPlantById(id);

    public createPlant = (req: Request) => PlantsRepository.instance.createPlant(req);

    public updatePlant = (req: Request) => PlantsRepository.instance.updatePlant(req);

    public deletePlant = (id: string) => PlantsRepository.instance.deletePlant(id);

}

export default PlantsService