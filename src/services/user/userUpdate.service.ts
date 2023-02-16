import { IUserUpdate } from "./../../interfaces/users/index";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { hash } from "bcryptjs";

const userUpdateService = async (
  id: string,
  {
    name,
    password,
    email,
    phone,
    description,
    birthdate,
    is_buyer,
    cpf,
  }: IUserUpdate
) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    id,
  });
  if (!user) {
    throw new AppError(404, "User not exists!");
  }

  const hashedPassword = await hash(password ? password : "", 10);

  await userRepository.update(
    { id },
    {
      name: name ? name : user.name,
      email: email ? email : user.email,
      phone: phone ? phone : user.phone,
      password: password ? hashedPassword : user.password,
      description: description ? description : user.description,
      is_buyer: is_buyer ? is_buyer : user.is_buyer,
      birthdate: birthdate ? birthdate : user.birthdate,
      cpf: cpf ? cpf : user.cpf,
    }
  );

  const newUser = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  return {
    message: "Updated user",
    user: newUser,
  };
};

export default userUpdateService;
