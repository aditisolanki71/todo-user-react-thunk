import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postReducer from '../reducer/post-reducer';
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = () => {
  const store = createStore(
    combineReducers({
      post: postReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

export default configureStore;
