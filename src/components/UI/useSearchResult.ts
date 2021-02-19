import React from "react";
import { useState } from "react";

export const useSearchResult = (searchStr:string):any => {
    const [values, setValues] = useState<string[]>([]);
    React.useEffect(() => {
      if(searchStr.length >= 3){
        //make API call
        setValues(["searched res 1", "searched res 2"]);

      }
      }, [searchStr]);
  
    return values;
  }