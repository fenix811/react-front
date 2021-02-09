import React, { PureComponent, useEffect, useState } from "react";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../../../layout/client/Header";
import ProductList from '../../ProductList/ProductList';
import ShoppingCard from '../../ShoppingCard/ShoppingCard';

import selectors from './selectors';
import { getProducts, addToShoppingCard, clearShoppingCard, addNewProduct } from "./actions";
import { IProduct } from "../../../models/product";

import './ClientApp.css';
import { IOrderItem } from "../../../models/orderItem";
import AddProduct from "../../Product/AddProduct";
import { IOrder } from "../../../models/order";

interface IAppProps{
    isLoading: boolean;
    products: IProduct[];
    orderItems: IOrderItem[];
    addToCard: Function;
};


export const ClientApp: React.FC<IAppProps> = ({isLoading, products, orderItems, addToCard}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        debugger;
        dispatch(getProducts());
    }, [])
    const handleAddToCard = (product:any) => {
        console.log(product);
       dispatch(addToShoppingCard(product));
    }

    const handleNewProduct = (product:any) => {
        console.log(product);
       dispatch(addNewProduct(product));
    }

    const handleClear = () => {
       dispatch(clearShoppingCard());
    }

    const submitOrder = (order: IOrder) => {
        console.log(order);
    }
        return (
        <>
            <Header></Header>
            <hr  />
            <div className="client-container color-grid">
            {<ProductList products={products} addToCard={handleAddToCard}/>}
            <div className="vl"></div>
            {<ShoppingCard orderItems={orderItems} clear={handleClear} submit={submitOrder} />}
            </div>
            <AddProduct addProduct={handleNewProduct}></AddProduct>
        </>
     )   
}

   
export default connect(selectors)(ClientApp);
