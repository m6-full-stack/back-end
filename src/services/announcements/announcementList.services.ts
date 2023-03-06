import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

const announcementListService = async () => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const generalAnnouncements = await announcementRepository.find({
    loadEagerRelations: false,
    relations: {
      advertiser: true,
      images_list: true,
    },
  });

  return generalAnnouncements;
};

export default announcementListService;
