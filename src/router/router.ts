import * as express from "express";
import { getCurrentWeather, getWeatherByDate, getAllWeather } from "../controller/WeatherController"
import { loginUser, signupUser } from "../controller/UserController";


class Routes {
  public router: express.Router = express.Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.get("/api/weather/now", (req: express.Request, res: express.Response) => {
      getCurrentWeather(req,res);
    });
    this.router.get("/api/weather/all", (req: express.Request, res: express.Response) => {
      getAllWeather(req,res);
    });
    this.router.get("/api/weather/:startDate/:endDate", (req: express.Request, res: express.Response) => {
      getWeatherByDate(req,res);
    });
    this.router.post("/api/user/login", (req: express.Request, res: express.Response) => {
      loginUser(req,res);
    });
    this.router.post("/api/user/signup", (req: express.Request, res: express.Response) => {
      signupUser(req,res);
    });
  }
}

export const weatherRoutes = new Routes().router;
