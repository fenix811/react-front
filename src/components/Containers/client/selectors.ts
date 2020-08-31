import { createStructuredSelector } from 'reselect';

const products = (state:any) => state.productPage.products;
const orderItems = (state:any) => state.productPage.orderItems;

export default createStructuredSelector({
    products,
    orderItems
});
