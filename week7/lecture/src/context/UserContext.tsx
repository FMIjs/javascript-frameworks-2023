import React, {createContext, useState} from 'react';

export interface UserInfoContext {
    updateUserInfo: (userInfo: Partial<UserInfoState>) => void;
    userInfo: UserInfoState
}

export interface UserInfoState {
    authenticated: boolean,
    userName: string
}

export const UserContext = createContext<UserInfoContext>({
    userInfo: {authenticated: false, userName: ''},
    updateUserInfo: () => 0
});

export class UserContextProvider extends React.Component<any, UserInfoState> {
    constructor(props: any) {
        super(props);

        this.state = {
            authenticated: false,
            userName: ''
        }
    }

    updateUserInfo = (userInfo: Partial<UserInfoState>) => {
        this.setState({...this.state, ...userInfo});
    }

    render() {
        return <>
            <UserContext.Provider value={{userInfo: this.state, updateUserInfo: this.updateUserInfo}}>
                {this.props.children}
            </UserContext.Provider>
        </>
    }


};
