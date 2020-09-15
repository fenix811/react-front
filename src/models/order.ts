import { IOrderItem } from "./orderItem";

export interface IOrder {
    id: number;
    date: Date;
    items: IOrderItem[];
  };
  