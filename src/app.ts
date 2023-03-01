import 'express-async-errors'
import 'reflect-metadata'
import express from 'express'
import { userRoutes } from './routes/user.routes'
import sessionRoutes from './routes/session.routes'
import handleErrorMiddleware from './middlewares/handleError.middleware'
import cors from 'cors'
import { announcementRoutes } from './routes/announcement.routes'
import commentRoutes from './routes/comment.routes'
import { profileRoutes } from './routes/profile.routes'
import imageRoutes from './routes/image.routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)
app.use('/login', sessionRoutes)
app.use("/profile", profileRoutes)
app.use('/images', imageRoutes)
app.use('/announcement', announcementRoutes)
app.use('/comment', commentRoutes)

app.use(handleErrorMiddleware)

export default app
