import {Request, Response} from "express";
import {BMP280} from "../model/BMP280";
import {DHT11} from "../model/DHT11";
import {DS18B20} from "../model/DS18B20";
import {Openweather} from "../model/Openweather";

export function getWeatherByDateController(req: Request, res: Response) {
  const startDate = req.params.startDate;
  const endDate = req.params.endDate;

  DS18B20.findAll({
    limit: 1,
    order: [[ 'id', 'DESC']]
  })
  .then(ds18b20Values => {
    res.status(200).send({
      DS18B20: {
        ds18b20Values
      }
    })
  })
  .catch(err => {
    res.status(500).send({
      Error: err
    })
  })
}
