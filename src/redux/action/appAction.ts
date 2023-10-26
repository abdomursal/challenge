import {AppReducerState} from '../reducer/appReducer';
import {action} from 'typesafe-actions';
import * as types from './actionTypes';

/**
 * Shallow merge new state with current app reducer state and initial state
 * Useful to update persistor state when reducer has new params
 *
 * @param state params of the app reducer
 */
export const setStoreState = (state?: Partial<AppReducerState>): any =>
  action(types.APP.SET_STORE_STATE, state);