import * as React from 'react';
import styled from "styled-components";

interface Props {
}

const BoxWrapper = styled.div`
  border: 1px solid black;
  img {
    height: 200px;
  }
`

export const Box : React.FC<Props> = props => {
    //TODO: Implement this

    return <BoxWrapper>
        {/*...*/}
    </BoxWrapper>
};
