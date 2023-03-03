import { Request, Response } from 'express'

import { instanceToPlain } from 'class-transformer'

import userRetrieveService from '../../services/user/userRetrieve.service'

const userRetrieveController = async (req: Request, res: Response) => {
  const { id } = req.params

  const users = await userRetrieveService(id)

  return res.json(instanceToPlain(users))
}

export default userRetrieveController
