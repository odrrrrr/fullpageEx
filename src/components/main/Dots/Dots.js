import React from 'react';
import styled from 'styled-components';

const DotsBlock = styled.div`
  position: fixed;
  top: 35%;
  right: 5%;
  .dotsContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20px;
    height: 200px;
  }
`;

const Dot = ({ num, scrollIndex }) => {
  return (
    <div
      style={{
        width: 30,
        height: 30,
        border: '1px solid black',
        borderRadius: 999,
        backgroundColor: scrollIndex === num ? 'black' : 'transparent',
        transitionDuration: 1000,
        transition: 'background-color 0.5s',
      }}
    ></div>
  );
};

const Dots = ({ scrollIndex }) => {
  return (
    <DotsBlock>
      <div className="dotsContainer">
        <Dot num={1} scrollIndex={scrollIndex} />
        <Dot num={2} scrollIndex={scrollIndex} />
        <Dot num={3} scrollIndex={scrollIndex} />
      </div>
    </DotsBlock>
  );
};
export default Dots;
