import React from 'react';
import styled from 'styled-components';

const FullPagePaperBlock = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

const FullPagePaper = ({ rest, children }) => {
  return <FullPagePaperBlock {...rest}>{children}</FullPagePaperBlock>;
};
export default FullPagePaper;
