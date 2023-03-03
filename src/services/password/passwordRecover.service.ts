import { User } from './../../entities/user.entity'
import AppDataSource from '../../data-source'
import { AppError } from '../../errors/appError'
import { hash } from 'bcryptjs'

const passwordRecoverService = async (
  tokenResetPassword: string,
  password: string
) => {
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOneBy({ tokenResetPassword })

  const hashedPassword = await hash(password, 10)

  if (!user) {
    throw new AppError(404, 'Incorrect token')
  }

  await userRepository.update(
    { id: user.id },
    {
      password: password ? hashedPassword : user.password,
    }
  )

  const updatedUser = await userRepository.findOneBy({ id: user.id })

  return {
    message: 'Password updated',
    user: updatedUser,
  }
}
export default passwordRecoverService
