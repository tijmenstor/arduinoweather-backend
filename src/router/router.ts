import * as express from "express";
import {getCurrentWeatherController} from "../controller/GetCurrentWeatherController";
import {getAllWeatherController} from "../controller/GetAllWeatherController";
import {getWeatherByDateController} from "../controller/GetWeatherByDateController";


class Routes {
  public router: express.Router = express.Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.get("/api/weather/now", (req: express.Request, res: express.Response) => {
      getCurrentWeatherController(req,res);
    });
    this.router.get("/api/weather/all", (req: express.Request, res: express.Response) => {
      getAllWeatherController(req,res);
    });
    this.router.get("/api/weather/:startDate/:endDate", (req: express.Request, res: express.Response) => {
      getWeatherByDateController(req,res);
    })
  }
}

export const weatherRoutes = new Routes().router;
