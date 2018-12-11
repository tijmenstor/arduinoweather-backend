import { Sequelize } from "sequelize-typescript";
import { BMP280 } from "./model/BMP280";
import { DHT11 } from "./model/DHT11";
import { DS18B20 } from "./model/DS18B20";
import { Openweather } from "./model/Openweather";

export class sequelizeRepo {
  repository: Sequelize;

  constructor() {
    this.config();
    this.checkConnection();
  }

  private config() {
    this.repository = new Sequelize({
      database: 'internetofthings',
      dialect: 'mysql',
      username: 'iot',
      password: 'iotiscool',
      url: 'localhost',
      port: 3306,
      modelPaths: [__dirname + '/model/*.ts']
    })
    this.repository.addModels([BMP280, DHT11, DS18B20, Openweather])
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
