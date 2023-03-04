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
  if (userId.length !== 36) {
    throw new AppError(404, "Invalid id format");
  }

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
    address: user.address,
    birthdate: birthdate ? birthdate : user.birthdate,
    phone: phone ? phone : user.phone,
    cpf: cpf ? cpf : user.cpf,
    description: description ? description : user.description,
    email: email ? email : user.email,
    name: name ? name : user.name,
    is_seller: is_seller ? is_seller : user.is_seller,
    password: password ? newPassword : user.password,
  });

  const updatedUser = await userRepository.findOneBy({ id: userId });

  return updatedUser;
};

export default updateUserService;
