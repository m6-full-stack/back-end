import AppDataSource from '../../data-source'
import { Announcement } from '../../entities/announcement.entity'
import { AppError } from '../../errors/appError'

const announcementRetrieveService = async (id: string) => {
  const announcementRepository = AppDataSource.getRepository(Announcement)

  const announcement = await announcementRepository.findOne({
    loadEagerRelations: false,
    relations: {
      comments: { user: true },
      images_list: true,
      advertiser: true,
    },
    where: { id: id },
  })

  if (!announcement) {
    throw new AppError(404, 'This announcement does not exist!')
  }

  return announcement
}

export default announcementRetrieveService
