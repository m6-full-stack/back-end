import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Response } from "express";
import { AppError } from "../../errors/appError";

const userDeleteService = async (id: string, res: Response) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError(404, "User not found");
  }
  userRepository.delete({ id });
  return;
};
export default userDeleteService;
