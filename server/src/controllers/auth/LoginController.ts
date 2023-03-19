import { Request, Response } from "express";
import * as dotenv from "dotenv";
import bcrypt from "bcrypt";
import { Pool } from "pg";

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

export async function Login(req: Request, res: Response): Promise<void> {
  const { username, password } = req.body;
  const query = "SELECT * FROM users WHERE username = $1";
  const values = [username];

  try {
    const result = await pool.query(query, values);
    const user = result.rows[0];

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
}
