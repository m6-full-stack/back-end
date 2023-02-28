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
  is_buyer,
  cpf,
}: IUser) => {
  const user = {
    name,
    password,
    email,
    phone,
    description,
    address,
    birthdate,
    is_buyer,
    cpf,
  }

  console.log(user)
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

  if (!addressAlreadyExists) {
    const newAddress = addressRepository.create(address)
    await addressRepository.save(newAddress)

    const hashedPassword = await hash(password, 10)
    const newUser = userRepository.create({
      name: name,
      email: email,
      phone: phone,
      password: hashedPassword,
      description: description,
      is_buyer: is_buyer,
      address: newAddress,
      birthdate: birthdate,
      cpf: cpf,
    })
    await userRepository.save(newUser)

    return newUser
  }

  const hashedPassword = await hash(password, 10)
  const newUser = userRepository.create({
    name: name,
    email: email,
    phone: phone,
    password: hashedPassword,
    description: description,
    is_buyer: is_buyer,
    address: addressAlreadyExists,
    birthdate: birthdate,
    cpf: cpf,
  })
  await userRepository.save(newUser)

  return newUser
}
export default userCreateService
// git commit -m 'fix: functional routes create and session user'
