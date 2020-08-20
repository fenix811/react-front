import { IProduct } from "../models/product";

//const API_HOST_NAME = 'localhost'  //TODO remove if no need
export const ProductApi = {
    getProducts(): Promise<any> {
        return fetch(`getproducts`)
       .then(response => response.json() as Promise<IProduct[]>)
    },
};
