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
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <main className='counter-container'>
      <div>
        <h1>Counter!</h1>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>
          Decrement
        </button>
      </div>
      <div className='count'>{state.count}</div>
    </main>
  );
};

export default Counter;
