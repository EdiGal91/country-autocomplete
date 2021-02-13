const CACHE = {}

export default async country => {
    const res = await fetch(`/complete/countries/${country}`)
    const countries = await res.json()
    return countries
}
