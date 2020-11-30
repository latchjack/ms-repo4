const redux = require('redux');
const createStore = redux.createStore;

// Central Store
/*
|============================================
| Here we set the initial state but just like the state in any other React app it doesn't have to an object,
| it can be a string, boolean or a number.
|============================================
*/
const initialState = {
  counter: 0
}

// Reducer
/*
|============================================
| We give the Reducer a default value, so if the function is called and the first argument is undefined it will
| revert to the default. To do this, in the first argument we declare the default with '= nameOfState'. The state
| will be undefined when it initially creates the Store where the Reducer gets executed for the first time. For 
| all subsequent actions the Reducer will have already been executed so the current State will be my initialState
| and it can then be changed.
|
| In the Reducer we get the second argument from the dispatched action and then react to different TYPES if actions.
| You can't set state as you would in React (e.g 'state.counter++') you need to update State in an immutable way by
| spreading the State into a new object and then overwrite the property you want to adjust. If that is also a JS
| object, you need to copy that too.
| In the ADD_COUNTER type we added the action.value (as in the value we set in the dispatch).
| 
| Giving us the below in our terminal. 
| { counter: 0 }
| { counter: 11 }
| The first counter is 0 on it's inital run through when it creates the store and uses the default value. The second
| counter is when the state has been set for the first argument and it dispatches our actions.
|============================================
*/
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
/*
|============================================
| To create subscription we access our store and use the subscribe method. Sub takes an argument - a function which
| will be executed whenever the state is updated (whenever the action reaches the Reducer). The function we pass to 
| subscribe doesn't get any arguments and then in it's body we can execute any code we want on the state update.
|============================================
*/
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

// Dispatching Action
/*
|============================================
| An action is dispatched by accessing the store and calling dispatch(), which is a function. Dispatch takes an 
| argument which is an action. This should be a JS object which needs to have a 'type' property. This is important 
| building block in getting the information (e.g. which type of action was dispatched and what we should do in the
| Reducer. 'Type' is a unique identifier of our choice. The convention is to use an uppercase string
|============================================
*/
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

/*
| Optionally could be done as below..
| store.dispatch({type: 'ADD_COUNTER', value: , name: , id: , payload: {}});
| store.dispatch({type: 'ADD_COUNTER', payload: {value: 5, name: 'FIVE', id: 1, }});
*/




/*
|============================================
| Redux Flow
|============================================
| 1. Central Store = Stores the entire application's state in a centralised location. To create one we
| initialise it by adding 'const createStore = redux.createStore' and then 'const store = createStore()'.
| A store needs to be initialised with a reducer because the reducer is strongly connected to the store. The
| Reducer is the only thing that will update the state. 
|
| 2. Action = A component wants to change the state so it dispatches an action.
| an action is an information package with a type an example being "add ingredient" or "remove ingredient"
| in the burger builder app. It may also hold a payload, example being, if adding an ingredient, which
| ingredient should be added.
| The action is just a messenger, it doesn't know how to update the Store and doesn't even directly talk to
| the Store. It sends it information to the Reducer.
|
| 3. Reducer/s = The reducer recieves the action and changes the Store. Reducers will always be merged into one
| even if you create multiple. A reducer is just a Pure Function that updates the state. It cannot create
| side-effects and can only immutably update the state synchronously (a new JS object). There are also ways 
| to get it to do this asynchronously.
| E.G. of creating a Reducer... 'const rooterReducer = function() {}' or 'const rooterReducer = () => {}'.
| The Reducer gets two arguments, the state (old/current state) and the action and then spits out an updated 
| state to the Store. Input -> Output.
|
| 4. Central Store - The Store Triggers receives the updated State then automatically triggers the Subscription.
|
| 5. Subscription - To get the updated state back into the component that dispatched to the action we use a 
| Subcription model. This passes the updated State as Props to the component in our application.
|============================================
*/

