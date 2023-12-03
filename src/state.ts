import ReduxThunk from 'redux-thunk';
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({});

export default function configureStore(preloadedState: any) {
  const middlewares = [ReduxThunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  // Thunk is middleware that allows you to write action creators that return a function instead of an action.
  // DevTools is an enhancer (actually changes Redux)
  // applyMiddleware allows you to add middleware to your Redux store. It wraps middleware and returns an enhancer

  // To use Thunk and DevTools, you need to apply the middlewareEnhancer to createStore
  const enhancer = composeWithDevTools(middlewareEnhancer);

  const store = createStore(reducer, preloadedState, enhancer);

  return store;
}

export interface AppState {}

export const initialAppState: AppState = {};

export const store = configureStore(initialAppState);
