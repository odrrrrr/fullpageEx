import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { currentScrollIndex } from '../../modules/scroll/scrollState';

// 풀페이지 효과
const useScrollAnimation = () => {
  const outerDivRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          // 1페이지
          outerDivRef.current.scrollTo({
            top: pageHeight,
            behavior: 'smooth',
          });
          dispatch(currentScrollIndex({ scrollIndex: 2 }));
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          // 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            behavior: 'smooth',
          });
          dispatch(currentScrollIndex({ scrollIndex: 3 }));
        } else {
          // 현재 3페이지
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          dispatch(currentScrollIndex({ scrollIndex: 1 }));
        } else {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight,
            behavior: 'smooth',
          });
          dispatch(currentScrollIndex({ scrollIndex: 2 }));
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, []);
  return {
    ref: outerDivRef,
  };
};

export default useScrollAnimation;
