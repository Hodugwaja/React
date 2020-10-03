import react, { Component, component } from 'react';

class LifeCycleSample extends Component{

}

export default LifeCycleSample;

/*
* LifeCycle API
* 컴포넌트에 수명이 있다. 페이지에 랜더링 전인 준비전부터 페이제에서 사라질때 까지가 수명이다
* 처음으로 랜더링을 할때 어떤 작업을 처라히거나 컴포넌트를 업데이트하기 전후로 어떤 작업을 처리를 하거나 불필요한 업데이트를 방지해야 하기 위해 사용하는 경우도 있다.
* 이때 라이프사이클 매서드를 사용을 하지만 클래스형 컴포넌트에만 사용할 수 있다는 특징이 있다.
* 함수형 컴포넌트에서는 대신 Hooks라는 기능을 사용할 수 있다.
*/ 

/*
* 마운트
* DOM이 생성이 되고 웹 브라우저 상에 나타나는 것을 마운트라고 한다
* 호출하는 매서드
*   construter : 컴포넌트를 새로 만들때마다 호출되는 클래스 생성자 메서드
*   getDrivedStateFromProps : props에 있는 값을 state에 넣을 때 사용하는 메서드
*   render : 우리가 준비한 UI를 랜더링하는 매서드
*   componentDidMount : 컴포넌트가 웹브라우저상에 나타난 후 호출하는 메서드
*/

/* 
* 업데이트
* 컴포넌트는 다음과 같은 상황에 업데이트가 된다
*   1. props가 바뀔때
*   2. state가 바뀔때
*   3. 부모 컴포넌트가 리렌더링 될때
*   4. this.forceUpdate로 강제로 렌더링을 트리거 할떄
*
* 이러한 이유로 컴포넌트를 업데이트를 한다
*   getDeviedStateFromProps : 이 메서드는 마운트 과정에도 호출이 되고 업데이트가 시작되기도 전에 호출이 된다 | props 변화에 따라 state값에도 변화를 주고 싶을 때 사용한다
*   shouldComponentUpdate : 컴포넌트가 리렌더링을 해야 할지 말아야할지를 결정하는 메서드, 이 메서드는 true 또는 false를 반환하는 역할을 한다
*           true : 다음 라이프사미클 매서드 실행
*           false : 작업을 중지
*   render : 컴포넌트를 랜더링
*   getSnapShotBeforeupdate : 컴포넌트의 변화를 DOM에 반영하기 바로 지전에 호출하는 메서드
*   componentDidUpdate : 컴포넌트의 업데이트 작업이 끝난 후 호출되는 메소드
*/

/*
* 언마운트
* 마운트의 반대과정(컴포넌트를 DOM에서 제거하는 과정)
* componentWillUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드
*/