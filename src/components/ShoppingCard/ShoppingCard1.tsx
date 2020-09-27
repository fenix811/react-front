import * as React from 'react';
import { IOrderItem } from '../../models/orderItem';
import ShoppingCardItem from '../ShoppingCardItem/ShoppingCardItem';
import { useCallback } from 'react';
import { IOrder } from '../../models/order';

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

interface IShoppingCardState{
    payment: string;
};

class ShoppingCard1 extends React.PureComponent<IShoppingCardProps, IShoppingCardState> {
    constructor(props:any){
        super(props);
        this.state = {
            payment: 'Cash'
        }
    }
    handleSubmit = () => {

        this.props.submit({
            payment: "Cash",
            items: this.props.orderItems,
            date: Date.now()
        })
    }

    handleChange(event: any) {
        this.setState({
            payment: event.target.value
        });
    }

    render() {
         return (
        <div style={styles.shoppingCard}>
                <div style={styles.cardHeader}>Shopping Card</div>
                <div>
                    <span>Pay by: </span>
                    <select name="cars" id="cars" value={this.state.payment} onChange={(e)=> this.handleChange(e)}>
                        <option value="Cash">Cash</option>
                        <option value="Card">Card</option>
                    </select>
                </div>
                {
                    this.props.orderItems.map((item, index) => (
                        <ShoppingCardItem orderItem={item} key={index}
                        />
                    ))
                }
                <div>
                    {/* <a href="#" onClick={handleClick}>clear</a> */}
                    <a href="#" onClick={() => this.props.clear()}>clear</a>
                    <button onClick={this.handleSubmit}>Create Order</button>
                </div>
            </div >
        );
    }
}

export default ShoppingCard1;
