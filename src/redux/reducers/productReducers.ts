import { IProduct } from '../../models/product';
import * as actions from '../../components/Containers/client/actions';

export interface IProductState {
    products: IProduct;
}

const initialState = {
    products: []
}

const productReducer = (state:any = initialState, actionPayload:any) => {
        switch (actionPayload.type) {
            case actions.GET_PRODUCTS_SUCCEED:
                console.log(actionPayload);
                return { ...state, products: actionPayload };
                default:
                return state
        }
}

export {productReducer};