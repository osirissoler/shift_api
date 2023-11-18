import { Router, Request, Response } from 'express'

import rolRouter from './routes/rol.routes';
import businessRouter from './routes/business.routes';
import userRouter from './routes/user.routes';
import authRouter from './routes/auth.routes';
import specialistsRouter from './routes/specialist.routes';
import servicesRouter from './routes/services.routes';
import galleryRouter from './routes/gallery.routes';



const router: Router = Router()


router.use('/router', rolRouter)
router.use('/business', businessRouter)
router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/specialists', specialistsRouter)
router.use('/services', servicesRouter)
router.use('/gallery', galleryRouter)
galleryRouter

export default router;