import useSWR from "swr";
import {IPost} from "../lib/types";

export const usePosts = (shouldFetch: boolean = true) => {
    const { data, error, isLoading } = useSWR<IPost[]>(shouldFetch ? '/posts' : null)

    return {
        posts: data,
        isLoading,
        isError: error
    }
}
