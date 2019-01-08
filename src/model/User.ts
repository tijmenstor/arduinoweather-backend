import { Table, Column, Model, PrimaryKey, Unique } from 'sequelize-typescript'

@Table
export class User extends Model<User> {

  @PrimaryKey
  @Column
  id: number;

  @Column
  @Unique
  username: string;

  @Column
  password: string;

}
