import { createAction } from '@reduxjs/toolkit';

// export const increment = value => ({
//   type: INCREMENT,
//   payload: value,
// });

// export const decrement = value => ({
//   type: DECREMENT,
//   payload: value,
// });

// export const change = value => ({
//   type: CHANGE,
//   payload: value,
// });

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const change = createAction('change');
