import React, { forwardRef } from "react";
import { useState } from "react";
import SearchResult from "./SearchResult";
import { useSearchResult } from "./useSearchResult";

interface IProductListProps {
}

const SearchInput = (props: any, ref: any) => {
    const [searchValue, setSearchValue] = useState("");

    const resultValues = useSearchResult(searchValue);

    const handleChange = (e:any) =>{
        console.log(e);
        setSearchValue(e.target.value); //TODO
    }
    return <> 
            <input onChange={handleChange} ref={ref} value={searchValue} type="text"  />
            {resultValues && <SearchResult values={resultValues}/>}
            </>
};

export default forwardRef(SearchInput);