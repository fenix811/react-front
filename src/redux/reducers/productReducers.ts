import { IProduct } from '../../models/product';
import * as actions from '../../components/Containers/client/actions';
import { IOrderItem } from '../../models/orderItem';
import { count } from 'console';

export interface IProductState {
    products: IProduct;
    orderItems: IOrderItem;
}

const initialState = {
    products: [],
    orderItems: []
}

const productReducer = (state:any = initialState, actionPayload:any) => {
        switch (actionPayload.type) {
            case actions.GET_PRODUCTS_SUCCEED:
                return { ...state, products: actionPayload.data };
                case actions.ADD_TO_SHOPPINGCARD:
                    console.log(actionPayload);
                    return { ...state, 
                        orderItems: [...state.orderItems, actionPayload.data] };
                case actions.CLEAR_SHOPPINGCARD:
                    return {...state, orderItems: []}
                case actions.ADD_NEW_PRODUCT:
                    return {...state, products: [...state.products, actionPayload.data]}
                            default:
                return state
        }
}

export {productReducer};