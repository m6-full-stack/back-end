import { Request, Response } from 'express'
import { AppError, handleError } from '../../errors/appError'

import { instanceToPlain } from 'class-transformer'

import userListService from '../../services/user/userList.service'
import { resolve } from 'node:path/win32'
const userListController = async (req: Request, res: Response) => {
  try {
    const users = await userListService()

    return res.json(instanceToPlain(users))
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}

export default userListController
