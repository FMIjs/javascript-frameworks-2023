import * as React from 'react';
import {useEffect, useState, useRef} from 'react';

interface Props {

}

const NotFound : React.FC<Props> = props => {
    const didMountRef = useRef(false);

    useEffect(() => {
        if(!didMountRef.current) {
            didMountRef.current = true;
        }
    }, []);

    return <>
        <h1>Page Not Found</h1>
    </>
};

export default NotFound;
