import  { Fetch_Posts ,  New_Posts } from '../Actions/types'

const initialState = {
    items: [],
    item : {}
}

export default function(state=initialState, action){
    switch (action.type) {
      case Fetch_Posts:
        return {
          ...state,
          items: action.payload,
        };
      case New_Posts:
        return {
          ...state,
          item: action.payload,
        };
      default:
        return state;
    }
}