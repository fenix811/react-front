import { createStructuredSelector } from 'reselect';

const products = (state:any) => state.productPage.products;

export default createStructuredSelector({
    products,
});
