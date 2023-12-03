import ReduxThunk from 'redux-thunk';
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  initialProjectState,
  projectReducer,
} from './projects/state/projectReducer';
import { ProjectState } from './projects/state/projectTypes';

// Configure the project reducer and state (below)
const reducer = combineReducers({
  projectState: projectReducer,
});

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

// Configure the state
export interface AppState {
  projectState: ProjectState;
}

// Configure the state
export const initialAppState: AppState = {
  projectState: initialProjectState,
};

export const store = configureStore(initialAppState);
