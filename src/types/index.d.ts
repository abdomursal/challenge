declare module 'redux-persist/lib/*';

export interface BaseAction {
  type: string;
  payload: any;
}

export interface User {
  id?: string;
}

export interface Launches {
  id?: string;
}

export interface SavedEpisodes {
  id?: string;
}