import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

const announcementRetrieveService = async (id: string) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const generalAnnouncements = await announcementRepository.findOne({
    loadEagerRelations: false,
    relations: { comments: {user: true}},
    where: { id: id },
  });

  return generalAnnouncements;
};

export default announcementRetrieveService;
