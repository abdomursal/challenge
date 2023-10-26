import {action} from 'typesafe-actions';
import {LAUNCHES} from './actionType';

export const fetchLaunchesSuccess = (payload: string): any => action(LAUNCHES.FETCH_SUCCESS, payload);

export const fetchLaunchesFailure = (payload: string): any => action(LAUNCHES.FETCH_FAILURE, payload);

export const fetchLaunches = (): any => action(LAUNCHES.FETCH);