import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";

export const ensureIdVerifyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id

  if (!id) {
    throw new AppError(404, "Id is required");
  }

  const contactsRepository =
    AppDataSource.getRepository(User);


  const contact = await contactsRepository.findOneBy({id});

  if (!contact) {
    throw new AppError(404, "This user dont exist");
  }

  return next();
};
