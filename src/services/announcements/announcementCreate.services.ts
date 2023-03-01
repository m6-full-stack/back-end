import AppDataSource from '../../data-source'
import { Announcement } from '../../entities/announcement.entity'
import { IAnnouncementRequest } from '../../interfaces/announcement'
import { User } from '../../entities/user.entity'
import { Image } from '../../entities/image.entity'
import imagesListCreateService from '../images/imagesCreate.services'
import imagesCreateService from '../images/imagesCreate.services'
import { AppError } from '../../errors/appError'

const announcementCreateService = async (
  {
    type,
    title,
    year,
    mileage,
    price,
    description,
    vehicle_type,
    cover_image,
    images_list,
  }: IAnnouncementRequest,
  id: string
): Promise<Announcement> => {
  const announcementRepository = AppDataSource.getRepository(Announcement)

  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({ id })

  const newAnnouncement = announcementRepository.create({
    type,
    title,
    year,
    mileage,
    price,
    description,
    vehicle_type,
    cover_image,
    advertiser: user!,
  })

  await announcementRepository.save(newAnnouncement)

  if (images_list) {
    const listImages = await imagesCreateService(images_list, newAnnouncement)

    if (!listImages) {
      throw new AppError(409, 'Images not created')
    }
    const announcementCreated = await announcementRepository.findOne({
      where: {
        id: newAnnouncement.id,
      },
    })

    return announcementCreated
  }
  throw new AppError(406, 'Requested images not found')
}
export default announcementCreateService
