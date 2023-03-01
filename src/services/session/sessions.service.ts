import { compare } from 'bcryptjs'
import AppDataSource from '../../data-source'
import { ILogin } from '../../interfaces/session'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/appError'
import jwt from 'jsonwebtoken'

const userLoginService = async ({ email, password }: ILogin) => {
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOneBy({ email })

  if (!user) {
    throw new AppError(403, 'Invalid email or password')
  }

  const passwordMatch = await compare(password, user.password)

  if (!passwordMatch) {
    throw new AppError(403, 'Invalid email or password')
  }

  const token = jwt.sign({ id: user.id, is_buyer: user.is_buyer }, process.env.SECRET_KEY as string, {
    expiresIn: '24h',
  })

  return token
}

export default userLoginService
