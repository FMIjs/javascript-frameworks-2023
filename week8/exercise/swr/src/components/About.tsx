import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {Outlet} from "react-router-dom";

interface Props {

}

const About : React.FC<Props> = props => {
    const didMountRef = useRef(false);

    useEffect(() => {
        if(!didMountRef.current) {
            didMountRef.current = true;
        }
    }, []);

    return <>
        <h1>This is about page</h1>
        <p>Now this is the outlet</p>
        <p style={{color: 'red'}}>
            <Outlet />
        </p>
    </>
};

export default About;
