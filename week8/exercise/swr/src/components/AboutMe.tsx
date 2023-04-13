import * as React from 'react';
import {useEffect, useState, useRef} from 'react';

interface Props {

}

const AboutMe : React.FC<Props> = props => {
    const didMountRef = useRef(false);

    useEffect(() => {
        if(!didMountRef.current) {
            didMountRef.current = true;
        }
    }, []);

    return <>
        <h1>I am Alex</h1>
    </>
};

export default AboutMe;
