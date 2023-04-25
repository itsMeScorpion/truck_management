import { combineReducers } from 'redux';

import loginReducer from '../components/Login/reducer';
import galleryReducer from '../components/Gallery/reducer';
import permissionReducer from '../components/Permission/reducer';

export default combineReducers({
  loginReducer,
  galleryReducer,
  permissionReducer,
});
