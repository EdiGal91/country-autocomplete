export const validateCountryPrefix = (req, res, next) => {
    const { countryPrefix } = req.params
    if(countryPrefix && countryPrefix.length >= 2)
        next()
    else
        res.json([])

}
