import React, { useState } from 'react';
import Home0 from './Home0.component';
import Home1 from './Home1.component';
import Home2 from './Home2.component';

const Home = () => {
  const stepsArr = [0, 1, 2];
  const [steps, setSteps] = useState(0);
  console.log(setSteps);

  if (steps === stepsArr[0]) {
    return <Home0 />;
  } if (steps === stepsArr[1]) {
    return <Home1 />;
  } if (steps === stepsArr[2]) {
    return <Home2 />;
  }
  return 'Welcome User';
};

export default Home;
