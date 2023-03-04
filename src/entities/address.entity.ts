import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './user.entity'

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  cep: string

  @Column()
  state: string

  @Column()
  city: string

  @Column()
  street: string

  @Column()
  number: string

  @Column({ nullable: true })
  complement: string
}
