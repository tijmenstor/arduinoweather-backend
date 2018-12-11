import {Table, Column, Model, PrimaryKey, DataType} from 'sequelize-typescript'

@Table
export class DHT11 extends Model<DHT11> {

    @Column
    @PrimaryKey
    id: number;

    @Column
    temperature: number;

    @Column
    humidity: number;

    @Column(DataType.DATE)
    timestamp: Date;

}
