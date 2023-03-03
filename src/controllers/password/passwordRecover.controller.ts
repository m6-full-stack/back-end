import { Request, Response } from 'express'
import { instanceToPlain } from 'class-transformer'
import { AppError, handleError } from '../../errors/appError'
import passwordRecoverService from '../../services/password/passwordRecover.service'
const passwordRecoverController = async (req: Request, res: Response) => {
  try {
    const { tokenResetPassword, password } = req.body
    const updated = await passwordRecoverService(tokenResetPassword, password)
    return res.status(200).send(instanceToPlain(updated))
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
    return res.status(401).send({ message: error })
  }
}

export default passwordRecoverController
