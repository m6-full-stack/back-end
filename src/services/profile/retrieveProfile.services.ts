import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

export const retrieveProfileService = async (id: string): Promise<User> => {
  const userRespository = AppDataSource.getRepository(User);

  const user = await userRespository.findOneBy({id: id});

  if (!user) {
    throw new AppError(404, "User not Found");
  }

  return user!;
};
