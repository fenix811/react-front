import * as React from 'react';
import { IProduct } from '../../models/product';
import Product from '../Product/Product';

interface IProductListProps {
    products?: IProduct[];
    addToCard: Function;
}
const styles= {
    productHeader: {
        marginLeft: 50,
        marginBottom: 20
    },
    productList: {
        width: '50%',
        padding: 10
    }
}

const ProductList = (props: IProductListProps) => {
    return (
            <div style={styles.productList}>
                <div style={styles.productHeader}>Product list</div>
                {
                    props.products?.map((item) => (
                        <Product product={item} addToCard={props.addToCard } key={item.id || item.name}/>
                    ))
                }
            </div >
        );
    }

export default ProductList;
