import appReducer from './appReducer';
import usersReducer from './usersReducer';
import launchesReducer from './launchesReducer';
import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

const appPersistConfig = {
  storage: AsyncStorage,
  key: 'app',
};

const userPersistConfig = {
  storage: AsyncStorage,
  key: 'user',
};

const seriesPersistConfig = {
  storage: AsyncStorage,
  key: 'series',
};
const episodesPersistConfig = {
  storage: AsyncStorage,
  key: 'episodes',
};

const savedPersistConfig = {
  storage: AsyncStorage,
  key: 'saved',
};

export const reducers = {
  app: persistReducer(appPersistConfig, appReducer),
  user: persistReducer(userPersistConfig, usersReducer),
  series: persistReducer(seriesPersistConfig, launchesReducer),

};

export const rootReducer = combineReducers(reducers);

export default rootReducer;