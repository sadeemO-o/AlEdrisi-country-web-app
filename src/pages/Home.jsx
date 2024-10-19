import SearchInput from "../components/SearchInput"
import RegionMenu from "../components/RegionMenu"
import CountryList from "../components/CountryList"
import ShowMessage from "../components/ShowMessage"
import {useFetchData} from '../useFetchData'


const Home = ()=>{
    const {data, filteredData, setFilteredData, isLoading, isError} = useFetchData()
  
    return (
        <>
        <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
        <SearchInput 
        countriesList={data}
        filterCountriesList={setFilteredData}
        />
        <RegionMenu
          countriesList={data}
          filterCountriesList={setFilteredData}
        />
        </div>
        {isError && (<ShowMessage message="Something went wrong" />)}
        {isLoading && (<ShowMessage message="Loading countries" />)}
        {!isError && !isLoading && (
          <CountryList data={filteredData} />
        )}
        </>
    )
}

export default Home
