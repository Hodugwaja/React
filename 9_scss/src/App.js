import React, { Component } from 'react';
import CSSModule from './CSSModule'

class App extends Component{
  render(){
    return(
      <div>
        <CSSModule />
      </div>
    );
  }
}

export default App;

/*
* Sass : Syntactically Awsome style sheets(문법적으로 매우 멋있는 스타일시트)
* CSS 전처리기로 복잡한 작업을 쉽게 할 수 있도록 해주고, 스타일 코드의 재활용성을 높여 줄 뿐만 아니라 코드의 가독성을 높여 유지보수가 쉬워진다
* TMI : 과거에는 .sass확장자로만 운영했지만 개발자들의 요청에 의해 현재는 .scss확장자도 나오게 되었다
* 두 확장자는 서로 문법이 다르다. 자세한 내용은 .sass, .scss참고 바람
*/

/*
* SASS 변수 및 믹스인은 다른파일로 따로 분리하여 작성한 뒤 필요한 곳에 쉽게 불러와 사용할 수 있다
* 다음과 같이 uitls.scss에 sassComponent.scss에 있는 변수및 믹스인을 가져오고
* sassComponent에 uitls.scss를 import를 하는 방식으로 하면된다
*/

/*
* '~'는 SASS에서는 node_modules에서 라이브러리 디렉터리 스타일을 불러올 수 있다
*/

/*
* CSS 모듈
* 리엑트 프로젝트에 컴포넌트를 스타일링 할때 CSS Module이라는 기능을 사용을 하다면 CSS 클래스 중첩을 방지
* 확장자는 .module.css
*/

/*
* CSS module + Sass
* 다음과 같이 사용을 하면 된다
*/