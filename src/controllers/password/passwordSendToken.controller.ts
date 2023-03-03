import { Request, Response } from 'express'
import passwordSendTokenService from '../../services/password/passwordSendToken.service'

const passwordSendTokenController = async (req: Request, res: Response) => {
  const { email } = req.body

  const token = await passwordSendTokenService(email)

  res.status(201).send({ token: token })
}
export default passwordSendTokenController
