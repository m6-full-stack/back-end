import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

const announcementListService = async () => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const generalAnnouncements = await announcementRepository.find();

  return generalAnnouncements;
};

export default announcementListService;
