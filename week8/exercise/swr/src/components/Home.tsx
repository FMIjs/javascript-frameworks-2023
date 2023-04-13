import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {usePosts} from "../hooks/use-posts";

interface Props {

}

const Home : React.FC<Props> = props => {
    const didMountRef = useRef(false);
    const {posts, isLoading, isError} = usePosts();


    useEffect(() => {
        if(!didMountRef.current) {
            didMountRef.current = true;
        }
    }, []);



    return <>
        <h1>Home</h1>
        {isLoading ? <h3>Posts are loading</h3> : <h3>There are {posts?.length} posts</h3>}
    </>
};

export default Home;
