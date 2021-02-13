import { findCountriesByPrefix } from '../services/coutry.service.js'

export const getCountriesByPrefix = (req, res) => {
    const { countryPrefix } = req.params
    const result = findCountriesByPrefix(countryPrefix)
    res.json(result)
}
