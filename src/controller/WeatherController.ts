import { Request, Response } from "express";
import { BMP280 } from "../model/BMP280";
import { DHT11 } from "../model/DHT11";
import { DS18B20 } from "../model/DS18B20";
import { Openweather } from "../model/Openweather";

export function getCurrentWeather(req: Request, res: Response) {
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

export function saveWeather(req: Request, res: Response) {
  const newBMP280Record: BMP280 = BMP280.build(req.body.BMP280)
  const newDHT11Record: DHT11 = DHT11.build(req.body.DHT11)
  const newDS18B20Record: DS18B20 = DS18B20.build(req.body.DS18B20)
  const newOpenweatherRecord: Openweather = Openweather.build(req.body.Openweather)

  const bmp280Promise = newBMP280Record.save();
  const dht11Promise = newDHT11Record.save();
  const ds18b20Promise = newDS18B20Record.save();
  const openweatherPromise = newOpenweatherRecord.save();

  const promisesArray = [bmp280Promise, dht11Promise, ds18b20Promise, openweatherPromise];

  Promise.all(promisesArray)
    .then(_ => res.status(200).send({ Status: "Succesfully inserted data." }))
    .catch(err => {
      console.log(Date.now() + "[saveWeather] - Failed while saving weatherdates: ", err);
      res.status(500).send({
        Error: err
      })
    })
}
