import { FETCH_USER_ID } from '../actions/ActionTypes';


const INITIAL_STATE = {
  loggedInUserId: null,
};

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_ID:
      return { ...state, loggedInUserId: action.userid };
    default:
      return state;
  }
};

export default dashboardReducer;