import React, { PureComponent } from "react";
import { connect } from 'react-redux';

import { Header } from "../../../layout/client/Header";
import {ProductList} from '../../ProductList/ProductList';

import * as actions from './actions';
import selectors from './selectors';
import { getProducts } from "./actions";
//import { getProducts } from "./actions";


interface IAppProps{
    dispatch: any;
};

 class ClientApp extends PureComponent<IAppProps> {
    componentDidMount() {
       this.props.dispatch(getProducts());
    }

    // function mapDispatchToProps(dispatch) {
    //     return {
    //         toggleModal: () => dispatch(toggleDeleteConfirmationModal()),
    //         onModalFormSubmit:(data) => dispatch(submitDeleteConfirmationModalForm(data)),
    //     };
    //   }
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

export default connect()(ClientApp);
