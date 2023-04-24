import { combineReducers } from 'redux';

import loginReducer from '../components/Login/reducer';
import galleryReducer from '../components/Gallery/reducer';

export default combineReducers({ loginReducer, galleryReducer });
