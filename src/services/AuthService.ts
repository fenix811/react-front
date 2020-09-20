import { IUser } from "../models/user";

export const AuthService = {
    isAuth(): boolean {
        debugger;
        if(localStorage.getItem('UserName') === null) //TODO
        {
            debugger;
            return false;
        }
        return true;
    },
    login(user: IUser): any {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            };

            return fetch(`api/login/login`, requestOptions)
                .then(handleResponse)
                .then(user => {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(user));
        
                    return user;
                });
        }
    }
    function handleResponse(response: any) {
        return response.text().then((text:string) => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    // location.reload(true);
                }
    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    }
