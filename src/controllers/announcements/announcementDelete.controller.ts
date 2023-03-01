import { Request, Response } from "express";
import announcementDeleteService from "../../services/announcements/announcementDelete.services";

const announcementDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await announcementDeleteService(id);

  return res.status(204).send();
};

export default announcementDeleteController;
