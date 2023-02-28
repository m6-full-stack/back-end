import { Request, Response } from "express";
import announcementRetrieveListService from "../../services/announcements/announcementRetrieveList.services";

const announcementRetrieveListController = async (req: Request, res: Response) => {

  const { id } = req.user;

  const announcement = await announcementRetrieveListService(id);

  return res.send(announcement);
};

export default announcementRetrieveListController;
