import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import FirstPortfolio from './Portfolio/FirstPortfolio';
import SecondPortfolio from './Portfolio/SecondPortfolio';
import ThirdPortfolio from './Portfolio/ThirdPortfolio';

const ThirdSectionBlock = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  .portfolioWrapper {
    display: flex;
    width: 250vw;
    position: absolute;
    height: 100vh;
  }

  .buttonWrapper {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100px;
    bottom: 0;
  }
`;

const ThirdSection = () => {
  const section = useRef(null);
  const [sectionPos, setSectionPos] = useState(0);
  useEffect(() => {
    section.current.style = `left:${sectionPos}%`;
    section.current.style.transition = '2s cubic-bezier(0.25, 0.1, 0.34, 1.58)';
  }, [sectionPos]);

  const onClickLeftBtn = () => {
    if (sectionPos < 0) {
      setSectionPos(sectionPos + 84);
    }

    return false;
  };

  const onClickRightBtn = () => {
    if (sectionPos > -85) {
      setSectionPos(sectionPos - 84);
    }

    return false;
  };

  return (
    <>
      <ThirdSectionBlock>
        <div className="portfolioWrapper" ref={section}>
          <FirstPortfolio />
          <SecondPortfolio />
          <ThirdPortfolio />
        </div>
        <div className="buttonWrapper">
          <Button left onClick={onClickLeftBtn}>
            ＜
          </Button>
          <Button right onClick={onClickRightBtn}>
            ＞
          </Button>
        </div>
      </ThirdSectionBlock>
    </>
  );
};
export default ThirdSection;
