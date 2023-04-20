import * as React from 'react';
import styled from "styled-components";
import {memo, ReactElement, useDeferredValue, useEffect, useState} from "react";
import {Box, Photo} from "./Box";
import {useSettings} from "../lib/hooks/useSettings";

interface Props {
}

const AlbumWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`


const Album: React.FC<Props> = props => {
    const {settings} = useSettings();

    const [imagesCount, setImagesCount] = useState(0);
    const deferredCount = useDeferredValue(imagesCount)

    return <>
            <input min={0} max={settings.maxImagesCount} type={'number'} value={imagesCount} onChange={e => {
                let value = +e.target.value;
                if(value > settings.maxImagesCount){
                    value = settings.maxImagesCount;
                }
                setImagesCount(value)
            }}/>
            <SlowAlbum imagesCount={deferredCount} />
        </>
};

const SlowAlbum = memo(({imagesCount} : {imagesCount: number}) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/photos/'
    const boxes :ReactElement[] = [];

    //Artificially slow the component - do not delete this
    const start = performance.now();
    while(true){
        if(performance.now() > start + 100)
            break;
    }

    if(imagesCount >= 0){
        for(let i = 1; i <= imagesCount; i++){
            const url = baseUrl + i;
            const box = <Box url={url} />
            boxes.push(box);
        }
    }

    return <>
        <AlbumWrapper>
            {boxes}
        </AlbumWrapper>
    </>
})

export default Album;
