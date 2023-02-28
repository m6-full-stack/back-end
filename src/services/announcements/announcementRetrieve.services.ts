import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

const announcementRetrieveService = async (id: string) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const generalAnnouncements = await announcementRepository.findOneBy({id});

  return generalAnnouncements;
};

export default announcementRetrieveService;
