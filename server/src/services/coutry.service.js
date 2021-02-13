import { readFile } from 'fs/promises'
import { join, dirname } from 'path'
import CACHE from './cache.service.js'

// __dirname is CJS variable, that are not available in ES modules.
// https://nodejs.org/api/esm.html#esm_no_filename_or_dirname
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const COUNTRIES_FILE_NAME = 'countries.json'
const COUNTRIES_FILE_PATH = join(__dirname, '..', 'data', COUNTRIES_FILE_NAME)

const COUNTRIES_STR = await readFile(COUNTRIES_FILE_PATH)
const COUNTRIES = JSON.parse(COUNTRIES_STR)

export const findCountriesByPrefix = prefix => {
    const cachedResult = CACHE[prefix]
    if(cachedResult) 
        return cachedResult
    
    const result = COUNTRIES.filter(country => country.name.toLowerCase().startsWith(prefix.toLowerCase()))
    CACHE[prefix] = result
    return result
}
