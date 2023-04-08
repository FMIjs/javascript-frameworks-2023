import * as React from 'react';
import {useEffect, useState, useRef} from 'react';

interface Props {

}

const AboutProject : React.FC<Props> = props => {
    const didMountRef = useRef(false);

    useEffect(() => {
        if(!didMountRef.current) {
            didMountRef.current = true;
        }
    }, []);

    return <>
        <h1>This is cool project</h1>
    </>
};

export default AboutProject;
