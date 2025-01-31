
import { useState } from "react";
import { UseSearch } from "./hooks/useItems";
import debounce from "lodash.debounce";


function App(){
 const [searchTerm, setSearchTerm] = useState('');
 const {data,error} = UseSearch(searchTerm)
 
 const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchTerm(e.target.value);
 }, 300);


    return (
        <div>
            <input type="text" 
            placeholder="Search material"
            className="border-2 border-black" 
            onChange={(e) => handleSearch(e)}/>
            {JSON.stringify(data || error)}
        </div>
    );
}

export default App;