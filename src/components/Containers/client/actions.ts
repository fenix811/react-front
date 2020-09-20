import { IProduct } from "../../../models/product";
import { IUser } from "../../../models/user";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCEED = 'GET_PRODUCTS_SUCCEED';

export const ADD_TO_SHOPPINGCARD = 'ADD_TO_SHOPPINGCARD';
export const CLEAR_SHOPPINGCARD = 'CLEAR_SHOPPINGCARD';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const LOGING = 'LOGING';

export const getProductsSucceed = (data:any) => ({ type: GET_PRODUCTS_SUCCEED, data });

export const getProducts = () => ({
    type: GET_PRODUCTS
  });
  
  export const addToShoppingCard = (product:IProduct) => ({
    type: ADD_TO_SHOPPINGCARD,
    data: product
  });

  export const clearShoppingCard = () => ({
    type: CLEAR_SHOPPINGCARD,
  })

  export const addNewProduct = (product:IProduct) => ({
    type: ADD_NEW_PRODUCT,
    data: product
  })
  
  export const login = (user:IUser) => ({
    type: LOGING,
    data: user
  })
  
