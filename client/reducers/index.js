import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import comments from './comments';

const rootReducer = combinedReducers({posts, comments, routerReducer})

export default rootReducer;