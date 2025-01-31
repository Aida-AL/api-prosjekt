
import { useState } from "react";
import { UseSearch } from "./hooks/useItems";
import debounce from "lodash.debounce";
import CompediumCard from "./components/CoCard";


function App(){
 const [searchTerm, setSearchTerm] = useState('');
 const {data, isError} = UseSearch(searchTerm)
 
 const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchTerm(e.target.value.toLowerCase());
 }, 300);

    if (isError) {
        return <div>Error</div>}

    return (
        <div className="searchArea">
            <input type="text"
            id ="searchBar"
            placeholder="Search for material..."
            onChange={(e) => handleSearch(e)}/>
            <div className="search">
                {data && data.data && (
                <CompediumCard object={data.data}/>)}
             </div>
        </div>
    );
}

export default App;