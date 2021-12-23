import React from 'react';
import { useSelector } from 'react-redux';
import Dots from '../../components/main/Dots/Dots';

const DotsContainer = () => {
  const { scrollIndex } = useSelector(({ scrollState }) => ({
    scrollIndex: scrollState.scrollIndex,
  }));
  return <Dots scrollIndex={scrollIndex} />;
};
export default DotsContainer;
