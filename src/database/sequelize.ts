import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  database: 'internetofthings',
  dialect: 'mysql',
  username: 'iot',
  password: 'iotiscool',
  url: 'localhost',
  port: 3306,
  modelPaths: [__dirname + '../model']
})
