import { User } from './../../entities/user.entity'
import AppDataSource from '../../data-source'
import { AppError } from '../../errors/appError'
import sendEmail from '../../utils/sendEmail.util'

const passwordSendTokenService = async (email: string) => {
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOneBy({ email })

  if (!user) {
    throw new AppError(404, 'User not exists!')
  }

  const emailData = {
    subject: 'Recuperação de senha',
    text: `<h1>Segue abaixo seu código para recuperação de senha</h1>
            <h3 style=\"text-decoration:underline; color: blue\"}>${user.tokenResetPassword}</h3>
    `,
    to: email,
  }
  await sendEmail(emailData)

  return user.tokenResetPassword
}
export default passwordSendTokenService
