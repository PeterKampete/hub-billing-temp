import React, { useContext } from 'react';
import { CountContext } from '../../App';
import Home0 from './Home0.component';
import Home1 from './Home1.component';
import Home2 from './Home2.component';

const Home = () => {
  const countContext = useContext(CountContext);
  if (countContext.countState === 0) {
    return <Home0 />;
  } if (countContext.countState === 1) {
    return <Home1 />;
  } if (countContext.countState === 2) {
    return <Home2 />;
  }
  return 'Welcome User';
};

export default Home;
