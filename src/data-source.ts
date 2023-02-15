import "dotenv/config";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": 5432,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB,
  "synchronize": false,
  "logging": true,
  "entities":
    process.env.NODE_ENV === "production"
      ? ["dist/entities/*.entity.js"]
      : ["src/entities/*.entity.ts"],
  "migrations":
    process.env.NODE_ENV === "production"
      ? ["dist/migrations/*.js"]
      : ["src/migrations/*.ts"],
});
export default AppDataSource;
