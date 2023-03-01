import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Announcement } from "../entities/announcement.entity";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";

export const ensureIdVerifyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params

  if (!id) {
    throw new AppError(404, "Id is required");
  }

  const announcementRepository =
    AppDataSource.getRepository(Announcement);


  const announcement = await announcementRepository.findOneBy({id});

  if (!announcement) {
    throw new AppError(404, "This announcement dont exist");
  }

  return next();
};
