import { Request, Response } from "express";
import announcementUpdateService from "../../services/announcements/announcementUpdate.services";

const announcementUpdateController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const announcement = req.body;

  const announcementUpdated = await announcementUpdateService(announcement, id);

  return res.status(200).send(announcementUpdated);
};

export default announcementUpdateController;
