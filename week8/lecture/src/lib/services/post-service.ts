import axios from "axios";
import {IComment, IPost} from "../types";

export class PostService{
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    }

    async getPostsPaginated(page: number) : Promise<IPost[]> {
        try {
            const limit = 20;
            const path = `?_page=${page}&_limit=${limit}`;
            const result = await axios.get<IPost[]>(this.baseUrl + path);
            return result.data;

        }catch (e: any){
            console.log(e);
            return [];
        }
    }

    async getCommentsForPost(postId: number) : Promise<IComment[]> {
        try {
            const path = `/${postId}/comments`;
            const result = await axios.get<IComment[]>(this.baseUrl + path);
            return result.data;

        }catch (e: any){
            console.log(e);
            return [];
        }
    }

    async getPostById(postId: number) : Promise<IPost | undefined> {
        try {
            const path = `/${postId}`;
            const result = await axios.get<IPost>(this.baseUrl + path);
            return result.data;

        }catch (e: any){
            console.log(e);
            return undefined;
        }
    }
}
