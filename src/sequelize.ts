import { Sequelize } from "sequelize-typescript";
import { BMP280 } from "./model/BMP280";
import { DHT11 } from "./model/DHT11";
import { DS18B20 } from "./model/DS18B20";
import { Openweather } from "./model/Openweather";
import { User } from "./model/User";
import * as dotenv from "dotenv";

export class sequelizeRepo {
  repository: Sequelize;

  constructor() {
    this.config();
    this.checkConnection();
  }

  private config() {
    dotenv.config();

    this.repository = new Sequelize({
      host: process.env.DB_HOST,
      database: process.env.DB_NAME || 'internetofthings',
      dialect: 'mysql',
      username: process.env.DB_USERNAME || 'mysql',
      password: process.env.DB_PASSWORD || 'wild_mysql_password',
      logging: false,
      modelPaths: [__dirname + '/model/*.ts']
    })
    this.repository.addModels([BMP280, DHT11, DS18B20, Openweather, User])
  }

  private checkConnection() {
    this.repository.authenticate()
      .then(_ => {
        console.log("Connection with DB instantiated.");
      })
      .catch(err => {
        console.log("Failed to connect to DB ", err);
      })
  }
}
