import React, { createContext, useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { Header } from "../../../layout/admin/Header";
import { IAdminData } from "../../../models/adminData";
import { AdminContext } from "../../../redux/adminContext";
import { adminServiceApi } from "../../../services/ApiAdminService";
import CompanyList from "../../CompanyList/CompanyList";
import Messages from "../../Messages/Messages";
import OrderList from "../../OrderList/OrderList";
import ProductList from "../../ProductList/ProductList";
import Tab from "../../Tabs/Tab";
import Tabs from "../../Tabs/Tabs";

const adminMessages = document.getElementById('adminMessages')!;

export const AdminApp = () => {

   const [adminData, setAdminData] = useState<IAdminData>();
   useEffect(() => {
debugger;
      adminServiceApi.getAdminData().then((data) => {
         setAdminData(data);
      })
      // ReactDOM.createPortal(Messages, adminMessages);
   }, []);

     return (
        <>
         <AdminContext.Provider value={adminData || {}}>
            <Messages>qwerty</Messages>
            <Header></Header>
            <hr  />
            <Tabs>
               <Tab title="Products">
                  <ProductList mode='view' products={adminData?.products || []} addToCard={()=>undefined}></ProductList>
               </Tab>
               <Tab title="Companies">
                  <CompanyList ></CompanyList>
               </Tab>
               <Tab title="Orders">
                  <OrderList></OrderList>
               </Tab>
            </Tabs>
<Messages ></Messages>
            </AdminContext.Provider>
     </>
     )   
}
