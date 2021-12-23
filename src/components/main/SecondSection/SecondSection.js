import React from 'react';
import styled from 'styled-components';
import background from '../../../image/background_second.jpg';

const SecondSectionBlock = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${background}) no-repeat;
  background-size: 100% 100%;
`;

const SecondSection = () => {
  return <SecondSectionBlock>Second</SecondSectionBlock>;
};
export default SecondSection;
