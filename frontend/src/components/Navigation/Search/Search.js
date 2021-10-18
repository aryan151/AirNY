import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchResults } from '../../../store/search'
import styles from './search.css' 

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [placeholder, setPlaceholder] = useState(`Enter a Borough`)

  useEffect(() => {
    const errors = [];  
    if (search.length === 0) errors.push("Must enter a search input")
    setValidationErrors(errors)
  }, [search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchstring = {
      search
    }

    if (validationErrors.length > 0) {
      return;
    }

    let foundHomes = await dispatch(searchResults(search))
    if (foundHomes.length > 0) { 
      setSearch('')
      setPlaceholder(`Please Enter a valid Borough`)
      history.push({ pathname: `/listings/search`, state: { search: searchstring.search } })
    } else {
      setSearch('')
      setPlaceholder(`Try a different location`)
    }
  }

  return (
    <div className={styles.searchbar}>
      <form className={styles.searchform} onSubmit={handleSubmit}>
        <input
          className={styles.searchinput}
          placeholder={placeholder}
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete='off'
        />
        <button
          className={styles.searchbutton}
          type="submit"
        >
          Search 
        </button>
      </form>
    </div>
  );
}

export default SearchBar