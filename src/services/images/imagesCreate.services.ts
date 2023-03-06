import AppDataSource from '../../data-source'
import { Announcement } from '../../entities/announcement.entity'
import { Image } from '../../entities/image.entity'
import { AppError } from '../../errors/appError';

const imagesCreateService = async (
  images_list: string[],
  id: string
) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcement = await announcementRepository.findOneBy({ id });

  if (!announcement) {
    throw new AppError(400, 'This announcement does not exists!')
  }

  const imagesRepository = AppDataSource.getRepository(Image)

  images_list.forEach(async (element) => {
    const newImage = imagesRepository.create({
      image_url: element,
      announcement,
    })

    await imagesRepository.save(newImage)
  })

  return true
}
export default imagesCreateService
