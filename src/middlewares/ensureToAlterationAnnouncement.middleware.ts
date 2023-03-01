import { Request, Response, NextFunction } from 'express'
import AppDataSource from '../data-source'
import { Announcement } from '../entities/announcement.entity'
import { AppError } from '../errors/appError'

export const ensureToAlterationAnnouncementMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idParams = req.params.id

  if (!idParams) {
    throw new AppError(404, 'Id is required')
  }

  const user = req.user

  const announcementRepository = AppDataSource.getRepository(Announcement)

  const findAnnouncement = await announcementRepository.findOne({
    where: {
      id: idParams,
    },
  })
  console.log(findAnnouncement)
  if (!findAnnouncement) {
    throw new AppError(404, 'This announcement dont exist')
  }

  if (findAnnouncement.advertiserId !== user.id) {
    return res.status(401).json({
      message:
        'What are you doing? You can only update or delete your own announcement',
    })
  }

  return next()
}
