import { Announcement } from "../../entities/announcement.entity";

export interface IImage {
  id: string
  image_url: string;
  announcement: Announcement;
}

export interface IImageRequest {
  image_url: string;
  announcement: Announcement;
}