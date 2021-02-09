import * as React from 'react';
import { IProduct } from '../../models/product';
import '../Containers/client/ClientApp.css';

interface IProductProps {
    product: IProduct;
    addToCard?: Function;
    mode?: 'view' | 'edit';
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

  const Product: React.FC<IProductProps> = ({product, addToCard, mode = 'edit'}) => {
    const handleAdd = () => addToCard && addToCard(product);
        return (
            <div style={styles.product} >
                <span style={styles.productLine}>{product.id}</span>
                <span >{product.name}</span>
                {mode === 'edit' && <button onClick={handleAdd}>Add</button>}
            </div>
        );
    }

export default Product;
