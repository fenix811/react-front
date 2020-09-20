import { connect } from 'react-redux';
import React from 'react';
import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import "../../index.css";
import selectors from './selectors';
import { Header } from "../../layout/client/Header";
import { login } from './actions';

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
        console.log(this);
        const newUser = {...this.state};

        this.props.dispatch(login(newUser));
        debugger;
    }
    cancel = () => {
        debugger;
    }
    render() {
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

export default connect(selectors)(Login);
