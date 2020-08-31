import * as React from 'react';
import { IProduct } from '../../models/product';
import '../Containers/client/ClientApp.css';
import Product from './Product';

  
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

//   const Product = (props: IProductProps) => {
//     const [count, setCount] = useState(0);

class AddProduct extends React.PureComponent<IAddProductProps, IAddProductState> {
    constructor(props:any){
        super(props)
        this.state = {
            name: '',
            description: '',
        }
    }
    handleInputChange = (e:any) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    addProduct = () => {
        this.props.addProduct(this.state);
    }
    render() {
        return (
            <div style={styles.product} >
                <div>
                    <span>name</span>
                    <input style={styles.productLine} name='name' onChange={this.handleInputChange} value={this.state.name}/>
                </div>
                <div>
                    <span>description</span>
                    <input style={styles.productLine} name="description" onChange={this.handleInputChange} value={this.state.description}/>
                </div>
                <button onClick={this.addProduct}>Save</button>
            </div>
        );
    }}

export default AddProduct;
