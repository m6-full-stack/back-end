import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  type: string;

  @Column()
  title: string;

  @Column()
  year: string;

  @Column()
  mileage: string;

  @Column()
  price: string;

  @Column()
  description: string;

  @Column()
  vehicle_type: string;

  @Column()
  cover_image: string;

  @Column("string", { array: true, default: [] })
  images_list: string[];

  @Column({ default: false })
  is_sold: boolean;

  @Column("date")
  createdAt: string;

  @ManyToOne(() => User, { eager: true, onDelete: "CASCADE" })
  @JoinColumn()
  advertiser: User;

  constructor() {
    if (!this.createdAt) {
      this.createdAt = new Date().toLocaleDateString();
    }
  }
}
