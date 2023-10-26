import {LAUNCHES} from '../action/actionType';
import {fetchLaunchesSuccess, fetchLaunchesFailure} from '../action/launchesAction';
import FetchLaunchesApi from '../../lib/fetchLaunchesApi';
import {call, put, takeEvery} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

function* fetchLaunches(action: any): any {
  try {
    const data = yield call(FetchLaunchesApi.fetchLaunches);
    // console.log('*****SAGA******', data);
    // data.isfetched = true;
    yield put(fetchLaunchesSuccess(data));
  } catch (e) {
    yield put(fetchLaunchesFailure(e.message));
  }
}

export default function* root(): any {
  yield takeEvery(LAUNCHES.FETCH, fetchLaunches);
}
