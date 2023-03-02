import { Image } from "../../entities/image.entity";
import { IUser } from "../users";

export interface IAnnouncement {
  id: string;
  type: string;
  title: string;
  year: string;
  mileage: string;
  price: string;
  description: string;
  vehicle_type: string;
  cover_image: string;
  images_list: Image[];
  createdAt: string;
  advertiser: IUser;
}

export interface IAnnouncementRequest {
  type: string;
  title: string;
  year: string;
  mileage: string;
  price: string;
  description: string;
  vehicle_type: string;
  cover_image: string;
  images_list: string[];
}

export interface IAnnouncementUpdate {
  type?: string;
  title?: string;
  year?: string;
  mileage?: string;
  price?: string;
  description?: string;
  vehicle_type?: string;
  cover_image?: string;
  images_list?: string[];
}
