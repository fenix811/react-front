import { IProduct } from "./product";
import { ICompany } from "./company";
import { IOrder } from "./order";

export interface IAdminData {
    companies: ICompany[];
    products: IProduct[];
    orders: IOrder[];
}
