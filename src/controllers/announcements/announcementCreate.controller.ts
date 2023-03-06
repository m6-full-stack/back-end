import { Request, Response } from 'express'
import announcementCreateService from '../../services/announcements/announcementCreate.services'

const announcementCreateController = async (req: Request, res: Response) => {
    const announcement = req.body

    const id = req.user.id

    const newAnnouncement = await announcementCreateService(announcement, id)
    return res.status(201).send(newAnnouncement)
}

export default announcementCreateController
