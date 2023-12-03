import { ThunkAction } from 'redux-thunk';

import {
  LOAD_PROJECTS_FAILURE,
  LOAD_PROJECTS_REQUEST,
  LOAD_PROJECTS_SUCCESS,
  ProjectState,
  SAVE_PROJECT_FAILURE,
  SAVE_PROJECT_REQUEST,
  SAVE_PROJECT_SUCCESS,
} from './projectTypes';
import { Action, AnyAction } from 'redux';
import { projectAPI } from '../projectAPI';
import { Project } from '../Project';
import { AppState } from '../../state';

// Create action creator functions

// Action creators
export const loadProjects = (
  page: number
): ThunkAction<void, ProjectState, null, Action<string>> => {
  return (dispatch: any) => {
    dispatch({
      type: LOAD_PROJECTS_REQUEST,
    });

    return projectAPI
      .get(page)
      .then((data) => {
        dispatch({
          type: LOAD_PROJECTS_SUCCESS,
          payload: { projects: data, page },
        });
      })
      .catch((error) => {
        dispatch({ type: LOAD_PROJECTS_FAILURE, payload: error });
      });
  };
};

export const saveProject = (
  project: Project
): ThunkAction<void, ProjectState, null, Action<string>> => {
  return (dispatch: any) => {
    dispatch({ type: SAVE_PROJECT_REQUEST });
    return projectAPI
      .put(project)
      .then((data) => {
        dispatch({ type: SAVE_PROJECT_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: SAVE_PROJECT_FAILURE, payload: error });
      });
  };
};
