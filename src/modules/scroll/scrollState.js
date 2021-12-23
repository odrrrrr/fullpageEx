import { createAction, handleActions } from 'redux-actions';

const CURRENT_SCROLL_INDEX = 'scroll/CURRENT_SCROLL_INDEX';

export const currentScrollIndex = createAction(
  CURRENT_SCROLL_INDEX,
  ({ scrollIndex }) => ({
    scrollIndex,
  })
);

const initialState = {
  scrollIndex: 1,
};

const scrollState = handleActions(
  {
    [CURRENT_SCROLL_INDEX]: (state, { payload: { scrollIndex } }) => ({
      ...state,
      scrollIndex,
    }),
  },
  initialState
);

export default scrollState;
