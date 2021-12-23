import React from 'react';
import styled from 'styled-components';
import mouseScrollGIF from '../../../image/mouseScroll.gif';
import background from '../../../image/background.png';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const FirstSectionBlock = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .mouseScroll {
    position: absolute;
    width: 30px;
    height: 100px;
    left: 50%;
    bottom: 0;
  }
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${background}) no-repeat;
  background-size: 100% 100%;
`;

const FirstSection = () => {
  return (
    <FirstSectionBlock>
      <LeftPart />
      <RightPart />
      <img className="mouseScroll" src={mouseScrollGIF} alt="mouse" />
    </FirstSectionBlock>
  );
};
export default FirstSection;
