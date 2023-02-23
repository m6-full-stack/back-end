import { Request, Response } from "express";
import announcementListService from "../../services/announcements/announcementList.services";

const ammountListController = async (req: Request, res: Response) => {
  const ammount = await announcementListService();

  return res.send(ammount);
};

export default ammountListController;
