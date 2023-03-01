import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import { Comment } from './comments.entity'
import { Image } from './image.entity'
import { User } from './user.entity'

@Entity()
export class Announcement {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  type: string

  @Column()
  title: string

  @Column()
  year: string

  @Column()
  mileage: string

  @Column()
  price: string

  @Column()
  description: string

  @Column()
  vehicle_type: string

  @Column()
  cover_image: string

  @Column({ default: false })
  is_sold: boolean

  @Column('date')
  createdAt: string

  @OneToMany(() => Image, (image) => image.announcement, {
    eager: true,
    nullable: true,
  })
  images_list: Image[]

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  advertiser: User

  @OneToMany(() => Comment, (comment) => comment.announcement, {
    eager: true,
    nullable: true,
  })
  comments: Comment[]

  constructor() {
    if (!this.createdAt) {
      this.createdAt = new Date().toLocaleDateString()
    }
  }
}
