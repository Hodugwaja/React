import React from 'react';
import ColorBox from './components/ColorBox';
import {ColorProvider} from './contexts/color';

const App = () => {
  return (
    <ColorProvider>
      <div>
          <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;


//Provider를 사용하면 context내의 value를 변경할 수 있음