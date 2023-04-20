import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

interface Props {

}

const Topbar : React.FC<Props> = props => {
    const didMountRef = useRef(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(!didMountRef.current) {
            didMountRef.current = true;
        }
    }, []);

    const handleNavigate = (to: '/posts' | '/about') => {
        navigate(to);
    }

    return <>
        <nav style={{display: "flex", width: "100vw", padding: '0.5rem', border: '1px solid black', marginBottom: '1rem'}}>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                style={{marginRight: '2rem'}}
            >
                Home
            </NavLink>
            <NavLink
                to="/album"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                style={{marginRight: '2rem'}}
            >
                Album
            </NavLink>
            <NavLink
                to="/settings"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                style={{marginRight: '2rem'}}
            >
                Settings
            </NavLink>
        </nav>
    </>
};

export default Topbar;
