import { Request, Response } from 'express'
import { AppError, handleError } from '../../errors/appError'
import announcementCreateService from '../../services/announcements/announcementCreate.services'

const announcementCreateController = async (req: Request, res: Response) => {
  try {
    const announcement = req.body

    const id = req.user.id

    const newAnnouncement = await announcementCreateService(announcement, id)
    return res.status(201).send(newAnnouncement)
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}

export default announcementCreateController
