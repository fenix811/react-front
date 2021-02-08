import React from "react";
import { IAdminData } from "../models/adminData";

type ContextProps = { 
    products: [],
    companies: [],
    orders: []
  };
  
  export const AdminContext = 
    React.createContext({});

