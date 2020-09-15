import { IProduct } from "../models/product";

//const API_HOST_NAME = 'localhost'  //TODO remove if no need
export const ProductApi = {
    getProducts(): Promise<any> {
        return fetch(`api/product/getproducts`)
       .then(response => response.json() as Promise<IProduct[]>)
    },
    addProduct(product: IProduct): Promise<any> {
        var qwe = JSON.stringify(product);
        debugger;
        return fetch(`api/product/addproduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(product)
        })
    },
};
export const CompanyApi = {
    getProducts(): Promise<any> {
        return fetch(`api/company/getcompanies`)
       .then(response => response.json() as Promise<IProduct[]>)
    },
};
