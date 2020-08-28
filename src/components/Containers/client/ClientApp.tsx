import React, { PureComponent } from "react";
import { connect } from 'react-redux';

import { Header } from "../../../layout/client/Header";
import ProductList from '../../ProductList/ProductList';

import * as actions from './actions';
import selectors from './selectors';
import { getProducts } from "./actions";
import { IProduct } from "../../../models/product";

interface IAppProps{
    dispatch: any;
    isLoading: boolean;
    products: IProduct[];
};

 class ClientApp extends PureComponent<IAppProps> {
    componentDidMount() {
       this.props.dispatch(getProducts());
    }

    render(){
        const { products } = this.props;
           return (
            <>
                <Header></Header>
                <hr  />
                <div>ClientApp works</div>
                {this.props && <ProductList products={products} />}
            </>
     )   
    }
}

// const mapDispatchToProps = dispatch => ({
//     sendMsg: msg => {
//         dispatch(sendMsg(msg));
//         dispatch(navigateTo({ routeName: 'myMsgList' }));
//     }
//    });

   
export default connect(selectors)(ClientApp);
