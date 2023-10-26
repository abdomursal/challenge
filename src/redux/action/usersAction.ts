import {User} from '../../types';
import {action} from 'typesafe-actions';
import {USER} from './actionTypes';

export const fetchUserSuccess = (payload: User): any => action(USER.FETCH_SUCCESS, payload);

export const fetchUserFailure = (payload: string): any => action(USER.FETCH_FAILURE, payload);

export const fetchUser = (payload: string): any => action(USER.FETCH, payload);