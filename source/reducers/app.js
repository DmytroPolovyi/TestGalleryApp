import {GalleryAPI} from '../actions/app';
const FETCH_ALL_DATA = 'FETCH_ALL_DATA';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  data: [],
  initialized: false
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DATA:
      return {
        ...state,
        data: [...Object.values(action.data)]
      };
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

const dataFetch = data => ({
  type: FETCH_ALL_DATA,
  data,
});

const initializedSuccess = () =>({
  type: INITIALIZED_SUCCESS
});

export const getDataThunk = () => async (dispatch) => {
  let responce = await GalleryAPI.getData();
  dispatch(dataFetch(responce.data));
  dispatch(initializedSuccess())
};
