import React, { useContext } from 'react';
import { StepContext } from '../../App';
import Home0 from './Home0.component';
import Home1 from './Home1.component';
import Home2 from './Home2.component';

const Home = () => {
  const stepContext = useContext(StepContext);
  const { stepState } = stepContext;
  if (stepState.step === 0 || stepState.finished) {
    return <Home0 />;
  } if (stepState.step === 1) {
    return <Home1 />;
  } if (stepState.step === 2) {
    return <Home2 />;
  }
  return 'Welcome User';
};

export default Home;
