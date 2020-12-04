import * as actionTypes from '../actions/actionTypes';

const initialState = {
  counter: 0
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
    default:
      return state;
  }
}

export default reducer;