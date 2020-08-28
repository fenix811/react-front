import * as React from 'react';
import { IProduct } from '../../models/product';
import Product from '../Product/Product';

interface IProductListProps {
    products: IProduct[];
}

class ProductList extends React.Component<IProductListProps> {
    render() {
        return (
            <div>
                {
                    this.props.products.map((item) => (
                        <Product product={item}
                        />
                    ))
                }
            </div >
        );
    }
}

export default ProductList;
