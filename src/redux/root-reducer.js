import {combineReducers} from 'redux';
import {pictureReducer} from './pictures/picture.reducer';

export default combineReducers({
  images: pictureReducer,
});
