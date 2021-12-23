import React from 'react';
import styled from 'styled-components';
import Button from '../../../common/Button';

const SecondPortfolioBlock = styled.div`
  width: 100vw;

  background: blue;
`;

const SecondPortfolio = ({ section }) => {
  return (
    <SecondPortfolioBlock>
      {/* <Button right onClick={() => (section.current.style = 'left:-84%')}>
        ＞
      </Button> */}
    </SecondPortfolioBlock>
  );
};
export default SecondPortfolio;
