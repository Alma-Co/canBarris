import * as express from 'express';
import * as bodyParser from 'body-parser';

class App {

    public express: express.Application;

    plants: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.plants = [{name:"aloe",family:"aloes",description:"aloe vera", water: "once a week", sunlight: "hours of full sun", soil: "well drained"}];
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        this.express.get('/', (req,res,next) => {
            res.send("Typescript App works!!!");
        });
        
        // request to get all plants
        this.express.get("/plants", (req,res,next) => {
            console.log("url:::::::"+req.url)
            res.json(this.plants);
        })

        // plant by id
        this.express.get("/plants/:id", (req,res,next) => {
            console.log("url:::::::"+req.url)
            let plant = this.plants.filter(function(plant){
                if(req.params.id === plant.id){
                    return plant;
                }
            })
            res.json(plant);
        })

        // request to post a plant
        this.express.post("/plant", (req,res,next) => {
            console.log("url:::::::"+req.url)
            this.plants.push(req.body);
            res.json(this.plants);
        })
    }
}

export default new App().express;