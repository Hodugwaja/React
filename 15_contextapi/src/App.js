import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

const App = () => {
  return (
    <ColorContext.Provider value = {{color : 'red'}}>
      <div>
          <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;


//Provider를 사용하면 context내의 value를 변경할 수 있음