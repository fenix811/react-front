export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCEED = 'GET_PRODUCTS_SUCCEED';

export const getProductsSucceed = (data:any) => ({ type: GET_PRODUCTS_SUCCEED, data });

export const getProducts = () => ({
    type: GET_PRODUCTS
  });
  

