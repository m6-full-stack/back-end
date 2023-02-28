import { IAddress } from "./../../interfaces/address/index";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Address } from "../../entities/adress.entity";
import { AppError } from "../../errors/appError";

const addressUpdateService = async (
  id: string,
  { cep, state, city, street, number, complement }: IAddress
) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    id,
  });
  if (!user) {
    throw new AppError(404, "User not exists!");
  }
  const addressRepository = AppDataSource.getRepository(Address);
  const address = await addressRepository.findOneBy(user.address);

  if (!address) {
    throw new AppError(404, "Address not found!");
  }

  await addressRepository.update(
    { id: address.id },
    {
      cep: cep ? cep : user.address.cep,
      state: state ? state : user.address.state,
      city: city ? city : user.address.city,
      street: street ? street : user.address.street,
      number: number ? number : user.address.number,
      complement: complement ? complement : user.address.complement,
    }
  );

  const newAddress = await addressRepository.findOne({
    where: {
      id: address.id,
    },
  });

  return {
    message: "Updated address",
    user: newAddress,
  };
};

export default addressUpdateService;
