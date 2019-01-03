import express from "express";
import * as bodyParser from "body-parser";
import { weatherRoutes } from "./router/router";
import {sequelizeRepo} from "./sequelize"

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use("/", weatherRoutes);
    new sequelizeRepo();
  }
}

export default new App().app;
