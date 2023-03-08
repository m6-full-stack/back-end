import { Router } from 'express'
import userCreateController from '../controllers/users/userCreate.controller'
import userDeleteController from '../controllers/users/userDelete.controller'
import userListController from '../controllers/users/userList.controller'
import userRetrieveController from '../controllers/users/userRetrive.controller'
import passwordSendTokenController from '../controllers/password/passwordSendToken.controller'
import passwordRecoverController from '../controllers/password/passwordRecover.controller'
import { updateUserAddressController } from '../controllers/users/updateUserAddress.controller'
import { userUpdateController } from '../controllers/users/userUpdate.controller'

const userRoutes = Router()

userRoutes.post('', userCreateController)

userRoutes.get('', userListController)

userRoutes.get('/:id', userRetrieveController)

userRoutes.delete('/:id', userDeleteController)

userRoutes.patch('/:id', userUpdateController)

userRoutes.patch('/address/:id', updateUserAddressController)

userRoutes.post('/sendTokenPassword', passwordSendTokenController)

userRoutes.post('/recoverPassword/:id', passwordRecoverController)

export default userRoutes
