import * as React from 'react';
import { IOrderItem } from '../../models/orderItem';
import ShoppingCardItem from '../ShoppingCardItem/ShoppingCardItem';
import { useCallback } from 'react';

interface IShoppingCardProps {
    orderItems: IOrderItem[];
    clear: Function;
    submit: Function;
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
    const handleSubmit = () => {
        props.submit();
    }
    // const handleClick = useCallback(() => {
    //     props.clear();
    //   })
         return (
        <div style={styles.shoppingCard}>
                <div style={styles.cardHeader}>Shopping Card</div>
                <div>
                    <span>Pay by: </span>
                    <select name="cars" id="cars">
                        <option value="Cash">Cash</option>
                        <option value="Card">Card</option>
                    </select>
                </div>
                {
                    props.orderItems.map((item) => (
                        <ShoppingCardItem orderItem={item} key={item.id || item.name}
                        />
                    ))
                }
                <div>
                    {/* <a href="#" onClick={handleClick}>clear</a> */}
                    <a href="#" onClick={() => props.clear()}>clear</a>
                    <button onClick={() => handleSubmit()}>Create Order</button>
                </div>
            </div >
        );
    }

export default React.memo(ShoppingCard);
