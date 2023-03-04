import { ensureAuthMiddleware } from './../middlewares/ensureAuth.middleware'
import { Router } from 'express'
import addressUpdateController from '../controllers/address/addressUpdate.controller'
import userCreateController from '../controllers/users/userCreate.controller'
import userDeleteController from '../controllers/users/userDelete.controller'
import userListController from '../controllers/users/userList.controller'
import userRetrieveController from '../controllers/users/userRetrive.controller'
// import updateUserAddressController from '../controllers/users/updateUserAddress.controller'
import passwordSendTokenController from '../controllers/password/passwordSendToken.controller'
import passwordRecoverController from '../controllers/password/passwordRecover.controller'
import { updateUserAddressController } from '../controllers/users/updateUserAddress.controller'
import { updateUserController } from '../controllers/users/userUpdate.controller'

export const userRoutes = Router()

userRoutes.post('', userCreateController)

userRoutes.get('', userListController)

userRoutes.get('/:id', userRetrieveController)

userRoutes.delete('/:id', userDeleteController)

userRoutes.patch('/:id', updateUserController)

userRoutes.patch('/address/:id', updateUserAddressController)

userRoutes.post('/sendTokenPassword', passwordSendTokenController)
userRoutes.post('/recoverPassword', passwordRecoverController)
