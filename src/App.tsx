import React from 'react';
import MyComponent from './components/Usesate/UseState';
import MyComponent1 from './components/useEffect/fetchData';
import TimerComponent from './components/useEffect/subscribe';

const App = () => {
  return (
    <div>
      <MyComponent />
      <TimerComponent />
      <MyComponent1 />
     
    </div>
  );
};

export default App;