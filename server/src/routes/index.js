import { Router } from 'express'
import countryRoutes from './country/index.js'

const router = new Router()
router.use(countryRoutes)

export default router
