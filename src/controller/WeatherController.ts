import { Request, Response } from "express";
import { BMP280 } from "../model/BMP280";
import { DHT11 } from "../model/DHT11";
import { DS18B20 } from "../model/DS18B20";
import { Openweather } from "../model/Openweather";

export function getCurrentWeather(req: Request, res: Response) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const bmp280Promise = BMP280.findAll({ limit: 1, order: [['id', 'DESC']] });
  const dht11Promise = DHT11.findAll({ limit: 1, order: [['id', 'DESC']] });
  const ds18b20Promise = DS18B20.findAll({ limit: 1, order: [['id', 'DESC']] });
  const openweatherPromise = Openweather.findAll({ limit: 1, order: [['id', 'DESC']] });

  const promisesArray = [bmp280Promise, dht11Promise, ds18b20Promise, openweatherPromise];

  Promise.all(promisesArray)
    .then(promiseValues => {
      res.status(200).send({
        BMP280: promiseValues[0],
        DHT11: promiseValues[1],
        DS18B20: promiseValues[2],
        Openweather: promiseValues[3]
      })
    })
    .catch(err => {
      console.log(Date.now() + "[GetCurrentWeatherController] - Failed while retrieving weatherdates: ", err);
      res.status(500).send({
        Error: err
      })
    })
}

export function getAllWeather(req: Request, res: Response) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const bmp280Promise = BMP280.findAll();
  const dht11Promise = DHT11.findAll();
  const ds18b20Promise = DS18B20.findAll();
  const openweatherPromise = Openweather.findAll();

  const promisesArray = [bmp280Promise, dht11Promise, ds18b20Promise, openweatherPromise];

  Promise.all(promisesArray)
    .then(promiseValues => {
      res.status(200).send({
        BMP280: promiseValues[0],
        DHT11: promiseValues[1],
        DS18B20: promiseValues[2],
        Openweather: promiseValues[3]
      })
    })
    .catch(err => {
      console.log(Date.now() + "[AllWeatherController] - Failed while retrieving weatherdates: ", err);
      res.status(500).send({
        Error: err
      })
    })
}

export function getWeatherByDate(req: Request, res: Response) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const startDate = req.params.startDate;
  const endDate = req.params.endDate;

  const bmp280Promise = BMP280.findAll({ where: { date: { $between: [startDate, endDate] } } });
  const dht11Promise = DHT11.findAll({ where: { date: { $between: [startDate, endDate] } } });
  const ds18b20Promise = DS18B20.findAll({ where: { date: { $between: [startDate, endDate] } } });
  const openweatherPromise = Openweather.findAll({ where: { date: { $between: [startDate, endDate] } } });


  const promisesArray = [bmp280Promise, dht11Promise, ds18b20Promise, openweatherPromise];

  Promise.all(promisesArray)
    .then(promiseValues => {
      res.status(200).send({
        BMP280: promiseValues[0],
        DHT11: promiseValues[1],
        DS18B20: promiseValues[2],
        Openweather: promiseValues[3]
      })
    })
    .catch(err => {
      console.log(Date.now() + "[getWeatherByDateController] - Failed while retrieving weatherdates: ", err);
      res.status(500).send({
        Error: err
      })
    })
}
