import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {IPost} from "../../lib/types";
import {PostService} from "../../lib/services/post-service";
import Post from "./Post";

interface Props {

}

const Posts : React.FC<Props> = props => {
    const didMountRef = useRef(false);
    const postService = new PostService();

    const [posts, setPosts] = useState<IPost[]>([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(5);


    useEffect(() => {
        console.log('fetching page ' + page)
        postService.getPostsPaginated(page).then(setPosts);
        didMountRef.current = true;
    }, [page]);

    return <>
        {posts.map(post => <Post post={post} />)}
        <div style={{display: 'flex'}}>
            <button onClick={() => setPage(page - 1)} disabled={page === 0}>Prev Page</button>
            <span>{page}</span>
            <button onClick={() => setPage(page + 1)} disabled={page === maxPage}>Next Page</button>
        </div>
    </>
};

export default Posts;
