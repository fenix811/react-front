import { connect } from 'react-redux';
import React from 'react';
import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import "../../index.css";
import selectors from './selectors';
import { Header } from "../../layout/client/Header";
import { login } from './actions';
import { History, LocationState } from "history";

// export const Login = () => {
//     return (
//         <div className="login-container">
//             <div >Login</div>
//             <div><input type="text" /></div>
//             <div >Password</div>
//             <div><input type="password" /></div>
//             <div>
//                 <button>Cancel</button>
//                 <button>login</button>
//             </div>
//         </div>
//     );
//   };
interface ILoginProps{
    dispatch: any;
    history: History<LocationState>;
};

interface ILoginState{
    username: string;
    password: string;
};

class Login extends React.PureComponent<ILoginProps, ILoginState> {
    constructor(props: any) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }
    handleChange = (e:any) =>{
        const { name, value } = e.target;
        this.setState<never>({ [name]: value } as Partial<ILoginState>)
    }

    login = () => {
        const newUser = {...this.state};
        this.props.dispatch(login(newUser));
    }

    cancel = () => {
        this.props.history.push('/');
//         let history = useHistory();
//         history.goBack();
    }
    
    render() {
        console.log('qwe render');
        const { username, password } = this.state;
        return (
            <>
                <Header hideAdmin={true}></Header>
                <hr  />

                <div className="login-container">
                    <div >Login</div>
                    <div><input type="text" name="username" value={username} onChange={this.handleChange}/></div>
                    <div >Password</div>
                    <div><input type="password" name="password" value={password} onChange={this.handleChange}/></div>
                    <div>
                        <button onClick={this.cancel}>Cancel</button>
                        <button onClick={this.login}>Login</button>
                    </div>
                </div>
        </>
    );
  }
}


//const loginWithRouter = withRouter(Login);
//export default connect(selectors)(loginWithRouter);

export default connect(selectors)(Login);
