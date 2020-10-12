import { createStore } from 'redux'; // 리덕스에서 해당 함수를 불러옴

const divToogle = document.querySelector('.toogle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOOGLE_SWITCH = 'TOGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toogleSwitch = () => ({
    type : TOOGLE_SWITCH
});
const increase = difference => ({
    type : INCREASE, difference
});
const decrease = () => ({
    type : DECREASE
});

const initalState = {
    toogle : false,
    counter : 0
};

function reducer(state = initalState, action){
    switch(action.type){
        case TOOGLE_SWITCH:
            return{    
            ...state,
                toogle : !state.toogle
            };
        case INCREASE:
            return{
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return{
                ...state,
                counter : state.counter - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const render = () => { // 상태가 업데이트가 될 때마다 호출하는 역할
    const state = store.getState();
    if(state.toggle){
        divToogle.classList.add('active');
    }else{
        divToogle.classList.remove('active');
    }
    counter.innerText = state.counter;
};

render();

store.subscribe(render); 
// 상태가 바뀔때마다 render함수가 호출 되도록 할 예정
// react-redux라는 라이브러리가 이 작업을 대신 할 수 있기 때문

divToogle.onclick = () => {
    store.dispatch(toogleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};

/*
*   redux
*   리덕스 상태 관리 라이브러리
*   컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리를 시켜서 더욱 효율적으로 관리 할 수 있음
*   컴포넌트끼리 똑같은 상태를 공유해야 할 떄도 이여러 컴포넌트를 거치지 않고 손쉽게 상태값을 전달하거나 업데이트 할 수 있음
*
*
*   action : 어떠한 변화가 필요하면 액션이라는 것 발생, 하나로 객체로 표현이 됨(type 필드 필수 === 액션의 이름)
*   reducer : 변화를 일으키는 함수, 액션을 만들어서 발생을 시키면 리듀서가 현재 상태를 전달 받은 액션 개체 피라미터로 받아온다
*   store : 리덕스에 적용을 하기 위해 스토어를 만듬(한개의 프로젝트에 한 개의 스토어를 넣을 수 있다)
*   dispatch : 스토어의 내장함수 중 하나, 액션 객체를 파라미터로 넣어서 호출
*   subscribe : 스토어의 내장함수 중하나, 상태가 업데이트가 될 때 마다 호출
*
*   redux의 3가지 규칙
*   1. 단일 스토어 : 하나의 애플리캐이션 안에는 하나의 스토어!
*   2. 읽기 전용 상태 + 불변성 유지 : 상태를 업데이트를 할 때는 기존 객체를 건드리지 않고 새로운 객체를 생성을 해 줘야 한다(불변성을 유지를 해야하는 이유 : 객체의 변화를 감지를 할 때 얕은 비교 검사를 해야함(효율성))
*   3. 순수한 함수 : 리듀서 함수는 이전 상태와 액션 객체를 파리미터로 받음, 파라미터의 값 외에는 의존 X
*/

