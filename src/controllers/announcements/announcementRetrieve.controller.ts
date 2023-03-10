import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import announcementRetrieveListService from "../../services/announcements/announcementRetrieve.services";

const announcementRetrieveController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const announcement = await announcementRetrieveListService(id);

  return res.send(instanceToInstance(announcement));
};

export default announcementRetrieveController;
