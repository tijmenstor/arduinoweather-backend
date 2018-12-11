import {Table, Column, Model, PrimaryKey, DataType} from 'sequelize-typescript'

@Table
export class BMP280 extends Model<BMP280> {

    @Column
    @PrimaryKey
    id: number;

    @Column
    temperature: number;

    @Column
    pressure: number;

    @Column
    altitude: number;

    @Column(DataType.DATE)
    timestamp: Date;

}
