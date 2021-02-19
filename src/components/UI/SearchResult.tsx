import React, { forwardRef } from "react";

// interface IProductListProps {
//     values: string[]
// }

const SearchResult = ({ values}: any) => {
    return <div>
        {
        values.map((val: string)=> <div id={val}>{val}</div>)    
        // props.values.map((val: string)=> <div id={val}>{val}</div>)    
        }
    </div>;}

export default (SearchResult);