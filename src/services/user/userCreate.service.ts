import { IUser } from '../../interfaces/users/index'
import { Address } from '../../entities/address.entity'
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

  const cpfAlreadyExists = users.find((user) => user.cpf === cpf)

  if (cpfAlreadyExists) {
    throw new AppError(400, 'CPF already exists!')
  }

  const dateArray = birthdate.split('/')

  const newBirthDate = `${parseInt(dateArray[2])}-${parseInt(
    dateArray[1]
  )}-${parseInt(dateArray[0])}`

  if (!dateArray && !newBirthDate) {
    throw new AppError(400, 'Your birthday is not correct')
  }

  const hashedPassword = await hash(password, 10)
  const tokenPassword = await hash(email, 6)
  const user = {
    name,
    password: hashedPassword,
    email,
    phone,
    description,
    birthdate: newBirthDate,
    is_seller,
    address,
    cpf,
    tokenResetPassword: tokenPassword,
  }

  const newAddress = addressRepository.create(address)
  await addressRepository.save(newAddress)
  user.address = newAddress
  const newUser = userRepository.create(user)
  await userRepository.save(newUser)

  return newUser
}
export default userCreateService
