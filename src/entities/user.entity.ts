import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Address } from "./adress.entity";
import { Announcement } from "./announcement.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  cpf: string;

  @Column("date")
  birthdate: string;

  @Column()
  description: string;

  @Column()
  is_buyer: boolean;

  @Column("date")
  created_at: string;

  @Column("date")
  updated_at: string;

  @OneToOne(() => Address, {
    eager: true,
    onDelete: "CASCADE",
  })
  @JoinColumn()
  address: Address;

  @OneToMany(() => Announcement, (announcement) => announcement.advertiser, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  announcements: Announcement[];

  constructor() {
    if (!this.created_at) {
      this.created_at = new Date().toLocaleDateString();
    }
    if (!this.updated_at) {
      this.updated_at = new Date().toLocaleDateString();
    }
  }
}
