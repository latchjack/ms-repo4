import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})})
        // concat is just like push(), except push adjusts the original array and concat creates a new array with the added value.
    case actionTypes.DELETE_RESULT:
      // const id = 2; // OPTION 1
      // const newArray = [...state.results];
      // newArray.splice(id, 1)
      const newArray = state.results.filter(result => result.id !== action.resultElementId); // return true if that index is unequal to the index of the result you want to remove
      return updateObject(state, {results: newArray}) 
    default:
      return state;
  }
}

export default reducer;

/*
In the DELETE_RESULT case. Using splice would affect the original array
and would not be immutable.

const id = 2;
state.results.splice(id, 1)

The filter method will return a new array
*/