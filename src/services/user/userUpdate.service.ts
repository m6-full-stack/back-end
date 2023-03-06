import { compareSync, hashSync } from 'bcryptjs'
import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/appError'
import { IUserUpdateRequest } from '../../interfaces/users'

const userUpdateService = async (
  {
    address,
    birthdate,
    phone,
    cpf,
    description,
    email,
    name,
    is_seller,
  }: IUserUpdateRequest,
  userId: string
) => {
  if (address) {
    throw new AppError(400, 'You cannot update address property.')
  }

  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({ id: userId })

  if (!user) {
    throw new AppError(404, 'User not found.')
  }

  let newBirthDate = ''

  if (birthdate) {
    const dateArray = birthdate.split('/')
    newBirthDate = `${parseInt(dateArray[2])}-${parseInt(
      dateArray[1]
    )}-${parseInt(dateArray[0])}`
  }

  await userRepository.update(
    { id: user!.id },
    {
      name: name ? name : user.name,
      email: email ? email : user.email,
      phone: phone ? phone : user.phone,
      description: description ? description : user.description,
      is_seller: is_seller ? is_seller : user.is_seller,
      birthdate: birthdate ? newBirthDate : user.birthdate,
      cpf: cpf ? cpf : user.cpf,
    }
  )

  const updatedUser = await userRepository.findOneBy({ id: userId })

  return updatedUser
}

export default userUpdateService
