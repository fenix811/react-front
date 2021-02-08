import * as React from 'react';
import { IOrder } from '../../models/order';
import { AdminContext } from '../../redux/adminContext';

const OrderList = () => {
    return <AdminContext.Consumer>
    {
      ({orders}: IOrder[]) => ( orders?.map((o: IOrder) => {
        return <div key={o.id}>{o.date}</div>}) 
      )
    }
    </AdminContext.Consumer>
}

export default OrderList;
