import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Announcement } from "./announcement.entity";
import { User } from "./user.entity";

@Entity()
export class Bid {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  value: string;

  @Column("date")
  created_at: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Announcement)
  @JoinColumn()
  announcement: Announcement;

  constructor() {
    if (!this.created_at) {
      this.created_at = new Date().toLocaleDateString();
    }
  }
}
