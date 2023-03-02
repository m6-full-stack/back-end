import { instanceToPlain } from 'class-transformer'
import { Request, Response } from 'express'
import { AppError, handleError } from '../../errors/appError'
import userCreateService from '../../services/user/userCreate.service'
const userCreateController = async (req: Request, res: Response) => {
  try {
    const {
      name,
      password,
      email,
      phone,
      description,
      address,
      birthdate,
      is_seller,
      cpf,
    } = req.body

    const newUser = await userCreateService({
      name,
      password,
      email,
      phone,
      description,
      address,
      birthdate,
      is_seller,
      cpf,
    })
    return res.status(201).json(instanceToPlain(newUser))
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}
export default userCreateController
