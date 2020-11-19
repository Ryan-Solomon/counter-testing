import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count > 0 ? state.count - 1 : 0 };
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <>
      <div>
        <h1>Counter!</h1>
        <button onClick={() => dispatch('INCREMENT')}>Increment</button>
        <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
      </div>
      <div className='count'>{count}</div>
    </>
  );
};

export default Counter;
