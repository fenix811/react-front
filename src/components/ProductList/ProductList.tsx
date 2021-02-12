import * as React from 'react';
import { IProduct } from '../../models/product';
import Product from '../Product/Product';

interface IProductListProps {
    products?: IProduct[];
    addToCard: Function;
    mode?: 'view' | 'edit';
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
                {
                    props.products?.map((item) => (
                        <Product mode={props.mode} product={item} addToCard={props.addToCard } key={item.id || item.name}/>
                    ))
                }
            </div >
        );
    }

export default ProductList;
