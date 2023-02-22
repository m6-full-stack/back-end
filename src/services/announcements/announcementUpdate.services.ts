import AppDataSource from "../../M6/S5/back-end/src/data-source";
import { AppError } from "../../M6/S5/back-end/src/errors/appError";
import { IAnnouncementUpdate } from "../../M6/S5/back-end/src/interfaces/announcement";
import { Announcement } from "../../M6/S5/back-end/src/entities/announcement.entity";

const announcementUpdateService = async ({
  type,
  title,
  year,
  mileage,
  price,
  description,
  vehicle_type,
  cover_image,
  images_list,
}: IAnnouncementUpdate, id: string,): Promise<Announcement> => {

  const annoucementRepository = AppDataSource.getRepository(Announcement);

  const announcement = await annoucementRepository.findOneBy({
    id,
  });

  if (!announcement) {
    throw new AppError(404, "This announcement don't exists!");
  }

  await annoucementRepository.update(id, {
    type: type ? type : announcement.type,
    title: title ? title : announcement.title,
    year: year ? year : announcement.year,
    mileage: mileage ? mileage : announcement.mileage,
    price: price ? price : announcement.price,
    description: description ? description : announcement.description,
    vehicle_type: vehicle_type ? vehicle_type : announcement.vehicle_type,
    cover_image: cover_image ? cover_image : announcement.cover_image,
    images_list: images_list ? images_list : announcement.images_list,
  });

  const annnoucementUpdated = await annoucementRepository.findOneBy({
    id,
  });

  return annnoucementUpdated!;
};

export default announcementUpdateService;
