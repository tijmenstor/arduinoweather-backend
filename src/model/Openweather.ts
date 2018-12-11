import {Table, Column, Model, PrimaryKey, DataType} from 'sequelize-typescript'

@Table
export class Openweather extends Model<Openweather> {

    @Column
    @PrimaryKey
    id: number;

    @Column
    temperature: number;

    @Column
    pressure: number;

    @Column
    humidity: number;

    @Column(DataType.DATE)
    timestamp: Date;

}
