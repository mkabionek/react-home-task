import { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  margin: 10px 0;
`;

const Head = styled.div`
  padding: 5px;
  color: #282c34;
  font-size: 16px;
`;

const Body = styled.div`
  padding: 5px;
  font-size: 12px;
  color: #474747;
`;

export function Panel({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Head onClick={() => setOpen(!open)}>{ title }</Head>
            { open && <Body>{ children }</Body> }
        </Container>
    )
}
