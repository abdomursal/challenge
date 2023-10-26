'use strict';
import {USER} from '../action/actionTypes';

const initialState: Initial = {
  user: {
    isfetched: false,
    id: 1,
    name: 'suleiman',
  },
};
interface Initial {
  user: UserInterface;
}
interface UserInterface {
  id: number;
  isfetched: boolean;
  name: string;
}

export default function usersReducer(state = initialState, action: any = {}): any {
  switch (action.type) {
    case USER.FETCH:
      //   console.log('****USERS Reducer ****', action);
      return {...state, loading: true, isfetched: false};
    case USER.FETCH_SUCCESS:
      // console.log('****Reducer ****', action);
      return {...state, loading: false, isfetched: true, user: action.payload};
    default:
      return state;
  }
}