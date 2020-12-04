import {pictureTypes} from './picture.types';
const INITIAL_STATE = {
  pictures: [],
};

export const pictureReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pictureTypes.SET_PICTURES:
      return {
        ...state,
        pictures: action.payload,
      };
    default:
      return state;
  }
};
