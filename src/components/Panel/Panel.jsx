import { useCallback } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  margin-bottom: 10px;
  .panel-container--wide & {
    margin-bottom: 25px;
  }
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

export function Panel({ title, children, id, open, onClick }) {
  const handleClick = useCallback(() => onClick(id), [id, onClick]);

  return (
    <Container>
      <Head onClick={handleClick}>{title}</Head>
      { open && <Body>{children}</Body>}
    </Container >
  );
}
