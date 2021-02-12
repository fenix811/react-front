import { connect, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import "../../index.css";
import selectors from './selectors';
import { Header } from "../../layout/client/Header";
import { login } from './actions';
import { History, LocationState } from "history";
import { useState } from 'react';
import { useRef } from 'react';

interface ILoginProps{
    dispatch: any;
    history: History<LocationState>;
};

export const Login: React.FC<ILoginProps> = ({ history}) => {
    const [values, setValues] = useState({username: '', password: ''});
    const dispatch = useDispatch();

    const usernameRef = React.useRef<HTMLInputElement>(null);
    React.useEffect(() => {
      if (usernameRef.current) {
        usernameRef.current.focus();
      }
    }, []);
  
    
    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setValues(prevState => ({...prevState, [name]: value}));
    }

    const handleLogin = () => {

        const newUser = {...values};
        dispatch(login(newUser));
    }

    const handleCancel = () => {
        history.push('/');
    }
    
    return (
        <>
        <Header hideAdmin={true}></Header>
        <hr  />
        <div className="login-container">
            <div >Login</div>
            <div><input type="text" name="username"  ref={usernameRef} value={values.username} onChange={handleChange}/></div>
            <div >Password</div>
            <div><input type="password" name="password" value={values.password} onChange={handleChange}/></div>
            <div>
                <button onClick={handleCancel} >Cancel</button>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    </>
);
}

export default connect(selectors)(Login);
