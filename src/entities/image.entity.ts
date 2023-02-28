import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Announcement } from "./announcement.entity";
import { v4 as uuid } from "uuid"


@Entity('image')
export class Image {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    image_url: string

    @ManyToOne(()=> Announcement, (announcement) => announcement.images_list)
    announcement: Announcement

    constructor() {
        if (!this.id) {
          this.id = uuid()
        }
      }
}