import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import styled from "styled-components";
import useSWR from 'swr';

interface Props {
    url: string;
}

const BoxWrapper = styled.div`
  border: 1px solid black;
  img {
    height: 200px;
  }
`

export interface Photo {
    albumId: number;
    id: number;
    title: number;
    url: string;
}

const fetcher = (...args: any) => fetch(args).then(res => res.json())

export const Box : React.FC<Props> = props => {
    const {data, error, isLoading} = useSWR<Photo>(props.url, fetcher)

    const didMountRef = useRef(false);



    useEffect(() => {
        if(!didMountRef.current) {
            didMountRef.current = true;
        }
    }, []);

    return <BoxWrapper>
        {isLoading ? 'Loading...' : <img src={data?.url} />}
    </BoxWrapper>
};
