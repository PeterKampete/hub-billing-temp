import React, { useReducer, createContext, useMemo } from 'react';

import Routing from './routes/Routing.component';

export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    default: return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const countValue = useMemo(() => ({ countState: count, countDispatch: dispatch }));
  return (
    <CountContext.Provider value={countValue}>
      <Routing />
    </CountContext.Provider>
  );
};

export default App;
