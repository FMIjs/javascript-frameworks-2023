import * as React from 'react';
import styled from "styled-components";

interface Props {
}

const AlbumWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`


export const Album: React.FC<Props> = props => {
    //TODO: Implement this

    return <>
        {/*...*/}
        <AlbumWrapper>
            {/*...*/}
        </AlbumWrapper>
    </>


    //TODO: For Task 3 Rewrite your logic from this component into SlowAlbumComponent and return it instead of
    // return <SlowAlbum />
};

const SlowAlbum = () => {
    //Artificially slow the component - do not delete this
    const start = performance.now();
    while(true){
        if(performance.now() > start + 100)
            break;
    }

    //TODO: Implement this

    return <>
        {/*...*/}
        <AlbumWrapper>
            {/*...*/}
        </AlbumWrapper>
    </>
}

