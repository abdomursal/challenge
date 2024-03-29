function createActionTypes(base: string, types: string[]) {
    const res: {[s: string]: string} = {};
    types.forEach((type) => (res[type] = `${base}_${type}`));
  
    return res;
  }

export const APP = createActionTypes('APP', ['SET_STORE_STATE']);

export const USER = createActionTypes('USER', ['FETCH', 'FETCH_SUCCESS', 'FETCH_FAILURE']);

export const LAUNCHES = createActionTypes('LAUNCHES', ['FETCH', 'FETCH_SUCCESS', 'FETCH_FAILURE']);
