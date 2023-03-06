import { Router } from 'express'
import sendEmailController from '../controllers/email/emailSend.controller'

const emailRoutes = Router()

emailRoutes.post('', sendEmailController)

export default emailRoutes;