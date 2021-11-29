import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import productReducer from './product'
import userReducer from './user'
import reviewReducer from './review'
import messageReducer from './message';
import searchReducer from './search';

const rootReducer = combineReducers({
  session,
  product:productReducer,
  user:userReducer,
  review: reviewReducer,
  message: messageReducer,
  search: searchReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
