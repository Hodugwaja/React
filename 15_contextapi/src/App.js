import React from 'react';
import ColorBox from './components/ColorBox';
import {ColorProvider} from './contexts/color';
import SelectColors from './components/SelectColor';

const App = () => {
  return (
    <ColorProvider>
      <div>
          <SelectColors />
          <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;


//Provider를 사용하면 context내의 value를 변경할 수 있음