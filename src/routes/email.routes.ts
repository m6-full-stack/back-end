import { Router } from 'express'
import sendEmailController from '../controllers/email/emailSend.controller'

export const emailRoutes = Router()

emailRoutes.post('', sendEmailController)
