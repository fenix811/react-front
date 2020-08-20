import React, { PureComponent } from "react";

import { Header } from "../../layout/client/Header";
import {ProductList} from '../ProductList/ProductList';


export class ClientApp extends PureComponent {

    render(){
     return (
        <>
            <Header></Header>
            <hr  />
            <div>ClientApp works</div>
            <ProductList></ProductList>
        </>
     )   
    }
}
