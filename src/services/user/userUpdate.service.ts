import { compareSync, hashSync } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserUpdateRequest } from "../../interfaces/users";


const updateUserService = async (
  {
    address,
    birthdate,
    phone,
    cpf,
    description,
    email,
    name,
    is_seller,
    password,
  }: IUserUpdateRequest,
  userId: string
) => {

  if (address) {
    throw new AppError(400, "You cannot update address property.");
  }

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError(404, "User not found.");
  }

  let newPassword = "";
  if (password) {
    if (compareSync(password, user.password)) {
      throw new AppError(400, "Enter a different password.");
    }
    newPassword = hashSync(password, 10);
  }

  console.log(is_seller);

  await userRepository.update(user!.id, {
    address,
    birthdate,
    phone,
    cpf,
    description,
    email,
    name,
    is_seller,
    password,
  });

  const updatedUser = await userRepository.findOneBy({ id: userId });

  return updatedUser;
};

export default updateUserService;
