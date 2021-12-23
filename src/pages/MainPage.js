import React from 'react';
import styled from 'styled-components';
import FirstSectionContainer from '../containers/main/FirstSectionContainer';
import SecondSectionContainer from '../containers/main/SecondSectionContainer';
import ThirdSectionContainer from '../containers/main/ThirdSectionContainer';
import useScrollAnimation from '../lib/hook/useScrollAnimation';
import DotsContainer from '../containers/main/DotsContainer';

const MainPageBlock = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
  overflow-y: auto;
`;

const MainPage = () => {
  const scrollAnimation = useScrollAnimation();
  return (
    <MainPageBlock {...scrollAnimation}>
      <FirstSectionContainer />

      <SecondSectionContainer />

      <ThirdSectionContainer />
      <DotsContainer />
    </MainPageBlock>
  );
};
export default MainPage;
