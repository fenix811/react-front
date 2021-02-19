import * as React from 'react';
import { IProduct } from '../../models/product';
import Product from '../Product/Product';
import SearchInput from '../UI/SearchInput';

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
    const ref = React.createRef();
    return (
            <div style={styles.productList}>
                <SearchInput ref={ref}></SearchInput>
                {
                    props.products?.map((item) => (
                        <Product mode={props.mode} product={item} addToCard={props.addToCard } key={item.id || item.name}/>
                    ))
                }
            </div >
        );
    }

export default ProductList;
