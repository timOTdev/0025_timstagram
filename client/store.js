import { createStore } from 'redux';
import reducers from './reducers/index';
import posts from './data/posts';
import comments from './data/comments';

const defaultState = {
  posts,
  comments
};

const store = createStore(reducers, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;