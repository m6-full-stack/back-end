import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  cep: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column({ nullable: true })
  complement: string;
}
