import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  increment,
  decrement,
  change,
} from '../../redux/counter/counter-actions';

// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case 'increment':
//       return state + payload;
//     case 'decrement':
//       return state - payload;
//     default:
//       return state;
//   }
// };

// const stepReducer = (state = 1, { type, payload }) => {
//   switch (type) {
//     case 'change':
//       return payload;
//     default:
//       return state;
//   }
// };

const valueReducer = createReducer(0, {
  [increment.type]: (state, { payload }) => state + payload,
  [decrement.type]: (state, { payload }) => state - payload,
});

const stepReducer = createReducer(1, {
  [change.type]: (_, { payload }) => payload,
});

export const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});
