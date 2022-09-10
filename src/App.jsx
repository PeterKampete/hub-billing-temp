import React, { useReducer, createContext, useMemo } from 'react';

import Routing from './routes/Routing.component';

export const StepContext = createContext();

const initialStep = { step: 0, finished: false };
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return { ...state, step: state.step + 1 };
    case 'decrement': return { ...state, step: state.step - 1 };
    case 'finished': return { ...state, finished: !state.finished };
    default: return state;
  }
};

const App = () => {
  const [step, dispatch] = useReducer(reducer, initialStep);
  const stepValue = useMemo(() => ({ stepState: step, stepDispatch: dispatch }));
  return (
    <StepContext.Provider value={stepValue}>
      <Routing />
    </StepContext.Provider>
  );
};

export default App;
