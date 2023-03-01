import { IUser } from '../../interfaces/users/index'
import { Address } from '../../entities/adress.entity'
import { User } from '../../entities/user.entity'
import AppDataSource from '../../data-source'
import { hash } from 'bcryptjs'
import { AppError } from '../../errors/appError'

const userCreateService = async ({
  name,
  password,
  email,
  phone,
  description,
  address,
  birthdate,
  is_seller,
  cpf,
}: IUser) => {
  const userRepository = AppDataSource.getRepository(User)
  const addressRepository = AppDataSource.getRepository(Address)
  const users = await userRepository.find()

  const addresses = await addressRepository.find()

  const emailAlreadyExists = users.find((user) => user.email === email)

  if (emailAlreadyExists) {
    throw new AppError(400, 'Email already exists!')
  }

  const addressAlreadyExists = addresses.find(
    (el) =>
      el.city === address.city &&
      el.street === address.street &&
      el.number === address.number
  )
  const hashedPassword = await hash(password, 10)
  const user = {
    name,
    password: hashedPassword,
    email,
    phone,
    description,
    birthdate,
    is_seller,
    address,
    cpf,
  }

  if (!addressAlreadyExists) {
    const newAddress = addressRepository.create(address)
    await addressRepository.save(newAddress)
    user.address = newAddress
    const newUser = userRepository.create(user)
    await userRepository.save(newUser)

    return newUser
  }
  user.address = addressAlreadyExists
  const newUser = userRepository.create(user)
  await userRepository.save(newUser)
  return newUser
}
export default userCreateService
