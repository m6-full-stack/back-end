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

<<<<<<< HEAD
  let newPassword = "";
  if (password) {
    if (compareSync(password, user.password)) {
      throw new AppError(400, "Enter a different password.");
=======
  let newBirthDate = "";

  if (birthdate) {
    const dateArray = birthdate.split("/");
    newBirthDate = `${parseInt(dateArray[2])}-${parseInt(dateArray[1])}-${parseInt(dateArray[0])}`
  }

  const hashedPassword = await hash(password ? password : '', 10)

  await userRepository.update(
    { id },
    {
      name: name ? name : user.name,
      email: email ? email : user.email,
      phone: phone ? phone : user.phone,
      password: password ? hashedPassword : user.password,
      description: description ? description : user.description,
      is_seller: is_seller ? is_seller : user.is_seller,
      birthdate: birthdate ? newBirthDate : user.birthdate,
      cpf: cpf ? cpf : user.cpf,
>>>>>>> 21dddf59be33eae948eca6c7cdb685665aaee0cb
    }
    newPassword = hashSync(password, 10);
  }

  console.log(is_seller);

  await userRepository.update(user!.id, {
    address: user.address,
    birthdate: birthdate ? birthdate : user.birthdate,
    phone: phone ? phone : user.birthdate,
    cpf: cpf ? cpf : user.cpf,
    description: description ? description : user.description,
    email: email ? email : user.email,
    name: name ? name : user.name,
    is_seller: is_seller ? is_seller : user.is_seller,
    password: password ? password : user.password,
  });

  const updatedUser = await userRepository.findOneBy({ id: userId });

  return updatedUser;
};

export default updateUserService;


