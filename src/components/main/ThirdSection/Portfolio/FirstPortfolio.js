import React from 'react';
import styled from 'styled-components';
import Button from '../../../common/Button';

const FirstPortfolioBlock = styled.div`
  width: 100vw;
  background: red;
  position: relative;
`;

const FirstPortfolio = () => {
  return (
    <FirstPortfolioBlock>{/* <Button left>＜</Button> */}</FirstPortfolioBlock>
  );
};
export default FirstPortfolio;
