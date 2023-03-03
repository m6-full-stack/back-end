import { Request, Response } from 'express'
import passwordSendTokenService from '../../services/password/passwordSendToken.service'

const passwordSendTokenController = async (req: Request, res: Response) => {
  const { email } = req.body

  await passwordSendTokenService(email)

  res.status(204).send()
}
export default passwordSendTokenController
