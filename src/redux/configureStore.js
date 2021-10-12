import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './home/home';
import imagesReducer from './home/images';

const reducer = combineReducers({
  countriesReducer,
  imagesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
