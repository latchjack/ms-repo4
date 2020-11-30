const redux = require('redux');
const createStore = redux.createStore;

// Reducer
const rootReducer = (state, action) => {
  return state;
}

// Store
const store = createStore(rootReducer);

// Dispatching Action

// Subscription

/*
|============================================
Central Store = Stores the entire application's state

Action = A component wants to change the state so it 

A store needs to be initialised with a reducer because the reducer 
(which we can only create one - even if we create multiple they will 
always be merged into one) is strongly connected to the store. Its the
only thing that will update the state. the reducer gets two arguments, 
the state and the action. state referring to the old state and action 


|============================================
*/

