
const SearchInput = ({countriesList, filterCountriesList}) => {
  const searchFilter= (e)=>{
    e.preventDefault();
    const searchingText = e.target.elements.search.value;
    const filteredCountries = !searchingText || searchingText === "" ? countriesList :
    countriesList.filter(country => country.name.official.toLowerCase().includes(searchingText.toLowerCase()));

    filterCountriesList(filteredCountries);
  }
  return (
    <form className="relative flex-1" onSubmit={searchFilter}>
      <div className="absolute left-7 top-4">
       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
      </div>
      <input type="text" name="search" className="h-12 w-full max-w-md rounded-full pl-20 shadow dark:bg-gray-800 md:h-14"></input>
    </form>
  )
}

export default SearchInput