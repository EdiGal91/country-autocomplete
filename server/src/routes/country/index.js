import { Router } from 'express'

import { validateCountryPrefix } from '../../middleware/coutries.middleware.js'
import { getCountriesByPrefix } from '../../controllers/country.controller.js'

const router = new Router()

router.get('/complete/countries/:countryPrefix', validateCountryPrefix, getCountriesByPrefix)

export default router
