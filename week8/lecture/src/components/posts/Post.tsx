import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {IComment, IPost} from "../../lib/types";
import {PostService} from "../../lib/services/post-service";
import {useParams} from "react-router-dom";

interface Props {
    post?: IPost;
}

const Post : React.FC<Props> = props => {
    let { postId } = useParams();
    const didMountRef = useRef(false);
    const postService = new PostService();

    const [showMore, setShowMore] = useState(false);
    const [comments, setComments] = useState<IComment[]>([]);
    const [post, setPost] = useState(props.post);

    useEffect(() => {
        if(postId){
            postService.getPostById(+postId).then(setPost);
        }
        console.log(postId)
    }, [postId]);


    useEffect(() => {
        if(!didMountRef.current && post) {
            didMountRef.current = true;
            postService.getCommentsForPost(post.id).then(setComments)
        }
    }, [post]);

    return <>
        <div>
            <div style={{display: 'flex'}}>
                <p>{post?.title}</p>
                <button onClick={() => setShowMore(!showMore)}>Show More</button>
            </div>
            {showMore && <p>{post?.body}</p>}
            {showMore && comments.map(comment => <p style={{color: 'green'}}>{comment.body}</p>)}
        </div>

    </>
};

export default Post;
