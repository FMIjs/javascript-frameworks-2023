import axios from "axios";
import {IComment, IPost, IUser} from "../types";

export class AuthService{
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/users';
    }

    async login(email: string, password: string) : Promise<boolean> {
        try {
            const users = await axios.get<IUser[]>(this.baseUrl);
            return users.data.some(user => user.email === email && user.username === password);
        }catch (e: any){
            console.log(e);
            return false;
        }
    }

}
