import React, {createContext, useState} from 'react';
import {UserInfo} from "../types";

export const UserContext = createContext<any>(null);

export const UserContextProvider = (props: any) => {
    const initialState : UserInfo = {
        authenticated: false
    }
    const [userInfo, setUserInfo] = useState(initialState);

    const updateUserInfo = (userInfo : Partial<UserInfo>) => {
        setUserInfo(prevState => {return {...prevState, ...userInfo}});
    }

    return <>
        <UserContext.Provider value={{userInfo, updateUserInfo}}>
            {props.children}
        </UserContext.Provider>
    </>
};
