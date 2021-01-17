'use strict';
import {LAUNCHES} from '../action/actionTypes';

const initialState: Initial = {
  launche: {
    id: 1,
  },
  loading: true,
  isfetched: false,
};
// find the property the api is fetching and declare them in here ??????
interface Initial {
  series: SerieInterface;
  isfetched: boolean;
  loading: boolean;
}
interface SerieInterface {
  id: number;
}

export default function lanchesReducer(state = initialState, action: any = {}): any {
  switch (action.type) {
    case LAUNCHES.FETCH:
      //   console.log('****EPISODES Reducer ****', action);
      return {...state, loading: true, isfetched: false};
    case LAUNCHES.FETCH_SUCCESS:
      // console.log('****SERIE Reducer ****', state);
      return {...state, loading: false, isfetched: true, series: action.payload};
    default:
      return state;
  }
}