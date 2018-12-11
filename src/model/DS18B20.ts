import {Table, Column, Model, PrimaryKey, DataType} from 'sequelize-typescript'

@Table
export class DS18B20 extends Model<DS18B20> {

    @Column
    @PrimaryKey
    id: number;

    @Column
    temperature: number;

    @Column(DataType.DATE)
    timestamp: Date;

}
