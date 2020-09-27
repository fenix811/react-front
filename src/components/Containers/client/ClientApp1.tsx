import React, { PureComponent, useEffect, useState } from "react";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../../../layout/client/Header";
import ProductList from '../../ProductList/ProductList';
import ShoppingCard from '../../ShoppingCard/ShoppingCard';

import * as actions from './actions';
import selectors from './selectors';
import { getProducts, addToShoppingCard, clearShoppingCard, addNewProduct } from "./actions";
import { IProduct } from "../../../models/product";

import './ClientApp.css';
import { IOrderItem } from "../../../models/orderItem";
import AddProduct from "../../Product/AddProduct";
import ShoppingCard1 from "../../ShoppingCard/ShoppingCard1";
import { IOrder } from "../../../models/order";

interface IAppProps{
    dispatch: any;
    isLoading: boolean;
    products: IProduct[];
    orderItems: IOrderItem[];
    addToCard: Function;
};


 class ClientApp1 extends PureComponent<IAppProps> {
    componentDidMount() {
       this.props.dispatch(getProducts());
    }
    addToCard = (product:any) => {
        console.log(product);
       this.props.dispatch(addToShoppingCard(product));
    }

    addNewProduct = (product:any) => {
        console.log(product);
       this.props.dispatch(addNewProduct(product));
    }

    clear = () => {
       this.props.dispatch(clearShoppingCard());
    }

    submitOrder = (order: IOrder) => {
        console.log(order);
    }
    render(){
        const { products, orderItems } = this.props;
           return (
            <>
                <Header></Header>
                <hr  />
                <div className="client-container color-grid">
                {<ProductList products={products} addToCard={this.addToCard}/>}
                <div className="vl"></div>
                {<ShoppingCard1 orderItems={orderItems} clear={this.clear} submit={this.submitOrder} />}
                </div>
                <AddProduct addProduct={this.addNewProduct}></AddProduct>
            </>
     )   
    }
}

   
export default connect(selectors)(ClientApp1);
