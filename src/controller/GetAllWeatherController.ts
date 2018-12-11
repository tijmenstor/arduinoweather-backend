import {Request, Response} from "express";
import {BMP280} from "../model/BMP280";
import {DHT11} from "../model/DHT11";
import {DS18B20} from "../model/DS18B20";
import {Openweather} from "../model/Openweather";

export function getAllWeatherController(req: Request, res: Response) {
  DHT11.findAll({
    limit: 1,
    order: [[ 'id', 'DESC']]
  })
  .then(dht11Values => {
    res.status(200).send({
      DHT11: {
        dht11Values
      }
    })
  })
  .catch(err => {
    res.status(500).send({
      Error: err
    })
  })
}
