import { createSlice, configureStore } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name:"counter",
    intialState: {value: 0},
    reducers: {
        increment:  state => {
           state.value += 1;
          },
          decrement: state => {
         state.value -= 1;
            
          },
    }
})
// export const selectCounter = (state) => state.counter.counter;
export const {increment, decrement} = counterSlice.actions
export const store = configureStore({reducer: counterSlice.reducer})
store.subscribe(() => console.log(store.getState()));

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
console.log(store.getState())
// const counterReducer = (state = 1, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return state + 1;
//       case "DECREMENT":
//         return state - 1;
//       case "RESET":
//         return (state = 0);
//       default:
//         return state;
//     }
//   };

//   export default counterReducer;