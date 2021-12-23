import React from 'react';
import { useSelector } from 'react-redux';
import ThirdSection from '../../components/main/ThirdSection/ThirdSection';

const ThirdSectionContainer = () => {
  const { scrollIndex } = useSelector(({ scrollState }) => ({
    scrollIndex: scrollState.scrollIndex,
  }));

  const onClickLeftBtn =() =>{
    
  }
  return <ThirdSection scrollIndex={scrollIndex}></ThirdSection>;
};
export default ThirdSectionContainer;
