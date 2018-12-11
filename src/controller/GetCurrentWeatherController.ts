import {Request, Response} from "express";
import {BMP280} from "../model/BMP280";
import {DHT11} from "../model/DHT11";
import {DS18B20} from "../model/DS18B20";
import {Openweather} from "../model/Openweather";

export function getCurrentWeatherController(req: Request, res: Response) {
  BMP280.findAll({
    limit: 1,
    order: [[ 'id', 'DESC']]
  })
  .then(bmp280Values => {
    res.status(200).send({
      BMP280: {
        bmp280Values
      }
    })
  })
  .catch(err => {
    res.status(500).send({
      Error: err
    })
  })
}
