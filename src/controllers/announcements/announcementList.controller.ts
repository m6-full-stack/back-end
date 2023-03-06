import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import announcementListService from "../../services/announcements/announcementList.services";

const announcementListController = async (req: Request, res: Response) => {
  const announcement = await announcementListService();

  return res.send(instanceToPlain(announcement));
};

export default announcementListController;
