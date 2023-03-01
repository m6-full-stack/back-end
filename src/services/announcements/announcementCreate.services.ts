import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { IAnnouncementRequest } from "../../interfaces/announcement";
import { User } from "../../entities/user.entity";
import { Image } from "../../entities/image.entity";
import imagesListCreateService from "../images/imagesCreate.services";

const announcementCreateService = async ({   
  type,
  title,
  year,
  mileage,
  price,
  description,
  vehicle_type,
  cover_image,
  images_list}: IAnnouncementRequest, id: string): Promise<Announcement>  => {

  const announcementRepository = AppDataSource.getRepository(Announcement);

  const userRepository = AppDataSource.getRepository(User);

  const imagesRepository = AppDataSource.getRepository(Image)

  const user = await userRepository.findOneBy({ id });

  
  const newAnnouncement = announcementRepository.create({
    type,
    title,
    year,
    mileage,
    price,
    description,
    vehicle_type,
    cover_image,
    advertiser: user!
  });

  await announcementRepository.save(newAnnouncement)
  
  await imagesListCreateService(images_list, newAnnouncement)

  const announcementCreated = announcementRepository.findOne({
    where: {
      id: newAnnouncement.id
    }, 
    relations: {
      images_list: true
    }});

  return announcementCreated;
};
export default announcementCreateService;
