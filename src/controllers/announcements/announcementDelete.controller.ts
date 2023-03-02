import { Request, Response } from 'express'
import { AppError, handleError } from '../../errors/appError'
import announcementDeleteService from '../../services/announcements/announcementDelete.services'

const announcementDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    await announcementDeleteService(id)

    return res.status(204).send()
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}

export default announcementDeleteController
