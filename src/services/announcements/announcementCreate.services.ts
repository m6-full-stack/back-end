import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { IAnnouncementRequest } from "../../interfaces/announcement";
import { User } from "../../entities/user.entity";

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
    images_list,
    advertiser: user!
  });

  return newAnnouncement;
};
export default announcementCreateService;
