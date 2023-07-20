import express, { Response, Request } from "express";
import bodyParser from "body-parser"
import router from "./src/routes/plantsRouter.js";
import Plants from "./src/controllers/plantsController.js";

const app = express()
const port = 3000


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
  )

  
app.get('/', (_req:Request, res:Response) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
  })
  
app.use(router);
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
