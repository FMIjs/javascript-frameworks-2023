import {useContext} from "react";
import {UserInfo} from "../types";
import {UserContext} from "../context/UserContext";

export function useUserInfo() : {userInfo : UserInfo, updateUserInfo : (userInfo : Partial<UserInfo>) => void }{
    const userInfoHelpers = useContext(UserContext);
    return userInfoHelpers;
}
