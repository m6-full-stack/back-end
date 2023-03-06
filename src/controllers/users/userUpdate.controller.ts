import { Request, Response } from 'express'
import { instanceToPlain } from 'class-transformer'
import userUpdateService from '../../services/user/userUpdate.service'

export const userUpdateController = async (req: Request, res: Response) => {
  const userData = req.body

  const { id } = req.params

  const updateUser = await userUpdateService(userData, id)

  return res.status(200).json(instanceToPlain(updateUser))
}
