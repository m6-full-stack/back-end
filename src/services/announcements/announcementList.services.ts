import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

const announcementListService = async () => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcements = await announcementRepository.find();

  return announcements;
};

export default announcementListService;
