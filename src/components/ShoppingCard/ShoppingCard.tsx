import * as React from 'react';
import { IOrderItem } from '../../models/orderItem';
import ShoppingCardItem from '../ShoppingCardItem/ShoppingCardItem';
import { useCallback } from 'react';

interface IShoppingCardProps {
    orderItems: IOrderItem[];
    clear: Function;
}
const styles= {
    cardHeader: {
        marginLeft: 50,
        marginBottom: 20
    },

    shoppingCard: {
        width: '50%',
        padding: 10
    }
}

const ShoppingCard = (props: IShoppingCardProps) => {
    // const handleClick = useCallback(() => {
    //     props.clear();
    //   })
         return (
        <div style={styles.shoppingCard}>
                <div style={styles.cardHeader}>Shopping Card</div>
                <div>
                    {/* <a href="#" onClick={handleClick}>clear</a> */}
                    <a href="#" onClick={() => props.clear()}>clear</a>
                </div>
                {
                    props.orderItems.map((item) => (
                        <ShoppingCardItem orderItem={item} key={item.id}
                        />
                    ))
                }
            </div >
        );
    }

export default React.memo(ShoppingCard);
