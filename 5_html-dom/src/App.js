import React from 'react';
import ScrollBox from './ScrollBox';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component{
  render(){
    return (
      <div>
        <ScrollBox ref = {(ref) => this.scrollBox = ref}/>
        <button onClick = {() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button> 
      </div>
    );
  }
}
export default App;


// scrollBox 컴포넌트 내의 scrollToBottm 매서드를 실행하게 함

//컴포넌트 내부에서 DOM을 직접 접근해야 할 때에는 ref를 사용한다(단 서로 다른 컴포넌트끼리 데이터를 교류할 때 ref를 사용한다면 잘못된 행동(가능하긴 하지만 크기가 너무 커짐))