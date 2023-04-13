import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {IPost} from "../../lib/types";
import Post from "./Post";
import useSWR, {mutate} from 'swr'
import axios from "axios";
import {usePosts} from "../../hooks/use-posts";

interface Props {

}

const Posts : React.FC<Props> = props => {
    const [shouldFetchPosts, setShouldFetchPosts] = useState(false);
    const {posts, isLoading, isError} = usePosts(shouldFetchPosts);


    if(isLoading)
        return <h2>Loading</h2>

    if(isError)
        return <h2>Error</h2>

    return <>
        <h1>Posts</h1>
        <button onClick={() => setShouldFetchPosts(true)}>Fetch Posts</button>
        {posts && posts.map(post => <Post post={post} />)}
    </>
};

export default Posts;
