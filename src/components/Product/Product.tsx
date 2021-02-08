import * as React from 'react';
import { IProduct } from '../../models/product';
import '../Containers/client/ClientApp.css';

interface IProductProps {
    product: IProduct;
    addToCard?: Function;
}
const styles = {
    product: {
      display: 'flex',
      justifyContent: 'flex-start',
      
    },
    productLine: {
        marginRight: 20
    },
  }

  const Product = (props: IProductProps) => {
    const addToCard = () => props.addToCard && props.addToCard(props.product);
        return (
            <div style={styles.product} >
                <span style={styles.productLine}>{props.product.id}</span>
                <span >{props.product.name}</span>
                <button onClick={addToCard}>Add</button>
            </div>
        );
    }

export default Product;
