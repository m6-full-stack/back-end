import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Announcement } from "../../entities/announcement.entity";

const announcementDeleteService = async (id: string) => {

  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcement = await announcementRepository.findOneBy({ id });

  if (!announcement) {
    throw new AppError(404, "Announcement not found");
  }

  announcementRepository.delete(announcement);

  return "Announcement deleted"
};
export default announcementDeleteService;
