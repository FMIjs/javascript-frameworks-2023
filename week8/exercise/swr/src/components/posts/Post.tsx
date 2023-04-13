import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {IComment, IPost} from "../../lib/types";

interface Props {
    post?: IPost;
}

const Post : React.FC<Props> = props => {
    const [post, setPost] = useState(props.post);

    return <>
        <div>
            <div style={{display: 'flex'}}>
                <p>{post?.title}</p>
            </div>
        </div>

    </>
};

export default Post;
