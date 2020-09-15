import * as React from 'react';
import { IProduct } from '../../models/product';
import '../Containers/client/ClientApp.css';
import Product from './Product';
import { useState } from 'react';

  
interface IAddProductProps {
    addProduct: Function;
}
interface IAddProductState {
    name?: string;
    description?: string;
}
const styles = {
    product: {
      display: 'flex',
      justifyContent: 'flex-start',
      
    },
    productLine: {
        marginRight: 20
    },
  }

export const AddProduct: React.FC<IAddProductProps> = ({addProduct}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const addItem = () => {
        addProduct(values);
        setValues({name: '', description: ''});
    }
    const [values, setValues] = useState({name: '', description: ''})

    return (
        <div style={styles.product} >
            <div>
                <span>name</span>
                <input style={styles.productLine} name='name' onChange={handleChange} value={values.name}/>
            </div>
            <div>
                <span>description</span>
                <input style={styles.productLine} name="description" onChange={handleChange} value={values.description}/>
            </div>
            <button onClick={addItem}>Save</button>
        </div>
    );
}


export default AddProduct;
