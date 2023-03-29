import axios from "axios";
import {ITodo} from "../types";

export class TodoService {
    constructor() {
    }

    async getAllTodos(limit: number) : Promise<ITodo[] | undefined>{
        try{
            const result = await axios.get<ITodo[]>("api/todos");
            return result.data;
        }catch (e: any){
            console.error(e);
            return undefined;
        }

    }
}
