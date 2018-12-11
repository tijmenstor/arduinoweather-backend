import express from "express";
import * as bodyParser from "body-parser";
import { weatherRoutes } from "./router/router";
import cors from "cors";
import {sequelizeRepo} from "./sequelize"

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.dbConnection();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use("/", weatherRoutes);
    this.app.use(cors());
  }

  private dbConnection(){
    new sequelizeRepo();
  }
}

export default new App().app;
