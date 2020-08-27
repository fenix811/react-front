import { createStructuredSelector } from 'reselect';

const products = (state:any) => state.Products;

export default createStructuredSelector({
    products,
});
