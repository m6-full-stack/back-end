import { ManyToOne } from 'typeorm'
import { Exclude } from 'class-transformer'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm'
import { Address } from './address.entity'
import { Announcement } from './announcement.entity'
import { Comment } from './comments.entity'

@Entity("user")
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 50 })
  name: string

  @Column({ length: 50 })
  email: string

  @Exclude()
  @Column()
  password: string

  @Column()
  phone: string

  @Column()
  cpf: string

  @Column('date', { nullable: true })
  birthdate: string

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true, default: false })
  is_seller: boolean

  @Exclude()
  @Column({ nullable: true })
  tokenResetPassword: string

  @Column('date')
  created_at: string

  @Column('date')
  updated_at: string

  @OneToOne(() => Address, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  address: Address

  @OneToMany(() => Announcement, (announcement) => announcement.advertiser, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  announcements: Announcement[]

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[]

  constructor() {
    if (!this.created_at) {
      this.created_at = new Date().toLocaleDateString()
    }
    if (!this.updated_at) {
      this.updated_at = new Date().toLocaleDateString()
    }
  }
}
