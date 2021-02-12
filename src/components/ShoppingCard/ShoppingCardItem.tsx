import * as React from 'react';
import { IOrderItem } from '../../models/orderItem';

interface IShoppingCardItemProps {
    orderItem: IOrderItem;
}
const styles= {
    shoppingCardItem: {
    }
}

const ShoppingCardItem = (props: IShoppingCardItemProps) => {
        return (
            <div style={styles.shoppingCardItem}>
                    <div>{props.orderItem.name}</div>
            </div >
        );
    }

export default ShoppingCardItem;
