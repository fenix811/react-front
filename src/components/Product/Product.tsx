import * as React from 'react';
import { IProduct } from '../../models/product';

interface IProductProps {
    product: IProduct;
}
const styles = {
    product: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    productLine: {
      },
  }

class Product extends React.Component<IProductProps> {
    render() {
        return (
            <div style={styles.product} key={this.props.product.id}>
                <span>{this.props.product.id}</span>
                <span>{this.props.product.name}</span>
            </div>
        );
    }
}

export default Product;
