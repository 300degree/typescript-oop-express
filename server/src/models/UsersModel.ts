import { Model, DataTypes } from 'sequelize';
import { Sequelize } from "sequelize";
import bcrypt from "bcrypt";

interface UserAttributes {
    id: number;
    name: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

export default class User extends Model<UserAttributes> implements UserAttributes {

}
