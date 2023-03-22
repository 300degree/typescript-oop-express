import { Request, Response } from "express";
import * as dotenv from "dotenv";
import bcrypt from "bcrypt";
import { Pool } from "pg";

import User from "../../models/UsersModel";
dotenv.config();

export default class SignupController {

  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT || "5432"),
    });
  }

  public async main(req: Request, res: Response): Promise<void> {
    const create_at = new Date().toISOString();
    const { email, username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const query = "INSERT INTO users(email, username, password, create_at) VALUES($1, $2, $3, $4)";
    const values = [email, username, hashPassword, create_at];

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const validEmail = emailRegex.test(email) && email.endsWith("@gmail.com");

      if (!validEmail) {
        res.status(400).json({ message: "Invalid email" });
      } else {
        // check if email or username already exists
        const checkQuery = "SELECT * FROM users WHERE email=$1 OR username=$2";
        const checkValues = [email, username];
        const { rows } = await this.pool.query(checkQuery, checkValues);

        if (rows.length > 0) {
          res.status(409).json({ message: "Email or username already exists" });
        } else {
          await this.pool.query(query, values);
          res.status(201).json({ message: "Registration successful" });
        }
      }
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

}
