import React from 'react';
import Todos from './Components/Todo';
import CounterContainer from './containers/CounterContainer';

function App() {
  return(
    <div>
      <CounterContainer />
      <hr />
      <Todos/>
    </div>
  );
}

export default App;
