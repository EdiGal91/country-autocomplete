import { useState, useEffect, useCallback, useRef } from 'react'
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import countryCompete from './api/country.compete';

function App() {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const toFetch = useRef(false)
  const lastFetchFor = useRef(null)
  
  const hanleCountyChange = event => {
    const newCountry = event.target.value
    toFetch.current = newCountry.length >= 2 && !newCountry.startsWith(lastFetchFor.current)
    setCountry(newCountry)
  }

  const updateCountries = useCallback(async () => {
    const countries = await countryCompete(country)
    setCountries(countries)
    lastFetchFor.current = country
  })

  useEffect(() => {
    if(!toFetch.current)
      return
    
    const timeoutId = setTimeout(updateCountries, 300);
    return () => clearTimeout(timeoutId)
  }, [country])

  return (
    <div>
      <h3>Hi, where are you from?</h3>
      <Autocomplete
        onInput={hanleCountyChange}
        options={countries}
        getOptionLabel={option => option.name}
        renderInput={params => <TextField {...params} />}
      />
    </div>
  );
}

export default App;
