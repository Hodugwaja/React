import { createStore } from 'redux';

const divToogle = document.querySelector('.toogle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOOGLE_SWITCH = 'TOOGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toogleSwitch = () => ({
    type : TOOGLE_SWITCH
});
const increase = () => ({
    type : INCREASE
})
const decrease = () => ({
    type : DECREASE
})

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
                counter: state.counter + action.differnce
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

/*
*   reducer : 변화를 일으키는 함수, 액션을 만들어서 발생을 시키면 리듀서가 현재 상태를 전달 받은 액션 개체 피라미터로 받아온다
*   store : 리덕스에 적용을 하기 위해 스토어를 만듬(한개의 프로젝트에 한 개의 스토어를 넣을 수 있다)
*   dispatch : 스토어의 내장함수 중 하나, 액션 객체를 파라미터로 넣어서 호출
*   subscribe : 스토어의 내장함수 중하나, 상태가 업데이트가 될 때 마다 호출
*/