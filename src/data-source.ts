import "dotenv/config";
import { DataSource } from "typeorm";
import { Address } from "./entities/adress.entity";
import { Announcement } from "./entities/announcement.entity";
import { Bid } from "./entities/bid.entity"
import { Transactions } from "./entities/transaction.entity"
import { User } from "./entities/user.entity";

const AppDataSource = new DataSource({
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": 5432,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB,
  "synchronize": true,
  "logging": true,
  "entities": [ Address, Announcement, Bid, Transactions, User ],
  "migrations": [  ],
});
export default AppDataSource;
