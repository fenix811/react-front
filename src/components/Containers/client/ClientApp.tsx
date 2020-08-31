import React, { PureComponent } from "react";
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

interface IAppProps{
    dispatch: any;
    isLoading: boolean;
    products: IProduct[];
    orderItems: IOrderItem[];
    addToCard: Function;
};

 class ClientApp extends PureComponent<IAppProps> {
    componentDidMount() {
       this.props.dispatch(getProducts());
    }
    addToCard = (product:any) => {
        console.log(product);
        debugger;
       this.props.dispatch(addToShoppingCard(product));
    }

    addNewProduct = (product:any) => {
        console.log(product);
        debugger;
       this.props.dispatch(addNewProduct(product));
    }

    clear = () => {
        debugger;
       this.props.dispatch(clearShoppingCard());
    }

    render(){
        const { products, orderItems } = this.props;
           return (
            <>
                <Header></Header>
                <hr  />
                <div className="client-container color-grid">
                {this.props && <ProductList products={products} addToCard={this.addToCard}/>}
                <div className="vl"></div>
                {this.props && <ShoppingCard orderItems={orderItems} clear={this.clear}/>}
                </div>
                <AddProduct addProduct={this.addNewProduct}></AddProduct>
            </>
     )   
    }
}

   
export default connect(selectors)(ClientApp);
