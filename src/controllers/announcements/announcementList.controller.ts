import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import announcementListService from "../../services/announcements/announcementList.services";

const ammountListController = async (req: Request, res: Response) => {
  try {
    const ammount = await announcementListService();

    return res.send(ammount);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default ammountListController;
