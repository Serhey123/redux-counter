import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  change,
} from '../../redux/counter/counter-actions';

import { getValue, getStep } from '../../redux/counter/counter-selectors';

export default function Counter() {
  const [num, setNum] = useState(0);

  const value = useSelector(getValue);
  const step = useSelector(getStep);

  const dispatch = useDispatch();

  return (
    <div>
      <br />

      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(change(Number(num)));
        }}
      >
        <input
          type="number"
          placeholder="your step"
          value={num}
          onChange={e => setNum(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>

      <br />
      <span>{value}</span>

      <div>
        <button onClick={() => dispatch(increment(step))}>+{step}</button>
        <button onClick={() => dispatch(decrement(step))}>-{step}</button>
      </div>
    </div>
  );
}

// const mapStateToProps = state => ({
//   value: state.counter.value,
//   step: state.counter.step,
// });

// const mapDispatchToProps = dispatch => ({
//   onIncrement: value => dispatch(increment(value)),
//   onDecrement: value => dispatch(decrement(value)),
//   onChange: value => dispatch(change(value)),
// });

// connect(mapStateToProps, mapDispatchToProps)(Counter);
