import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
        const newState = Object.assign({}, state); // Option1: immutably copy the state like this (new empty object on the left and the object you want to copy on the right)
        newState.counter = state.counter + 1; // add the change you want to the new object.
        return newState // return the new object in the switch statement.
    case actionTypes.DECREMENT:
      return {
        ...state, // Option2: without spreading here, we would lose the results array from our state, as it would set the new state with only the counter
        counter: state.counter - 1 // add the change you want to the new object.
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter}) 
        // concat is just like push(), except push adjusts the original array and concat creates a new array with the added value.
      }
    case actionTypes.DELETE_RESULT:
      // const id = 2; // OPTION 1
      // const newArray = [...state.results];
      // newArray.splice(id, 1)
      const newArray = state.results.filter(result => result.id !== action.resultElementId); // return true if that index is unequal to the index of the result you want to remove
      return {
        ...state,
        results: newArray 
      }
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