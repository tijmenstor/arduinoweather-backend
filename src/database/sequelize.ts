import { Sequelize } from "sequelize-typescript";
import {BMP280} from "../model/BMP280";
import {DHT11} from "../model/DHT11";
import {DS18B20} from "../model/DS18B20";
import {Openweather} from "../model/Openweather";

export const sequelize = new Sequelize({
  database: 'internetofthings',
  dialect: 'mysql',
  username: 'iot',
  password: 'iotiscool',
  url: 'localhost',
  port: 3306,
  modelPaths: [__dirname + '../model']
})

sequelize.addModels([BMP280,DHT11,DS18B20,Openweather])
