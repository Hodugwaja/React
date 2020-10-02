import React, { useState } from 'react';

const IterationSample = () => {
    const[names, setNames] = useState([
        {id : 1, text : '맥심 바보'},
        {id : 2, text : '너의'},
        {id : 3, text : '눈'},
        {id : 4, text : '코'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    
    const onClick = () => {
    const nextNames = names.concat({
        id : nextId,
        text : inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
    }; 

    const onRemove = id =>{
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const namesList = names.map(name => ( 
        <li key = {name.id} onDoubleClick = {() => onRemove(name.id)}>
            {name.text}
        </li>
    ));
    return(
    <>
        <input value = {inputText} onChange = {onChange} />
        <button onClick = {onClick}>추가</button>
        <ul>{namesList}</ul>    
    </>
    )
}
export default IterationSample;


/*
* arr.map(callback, [this.Arg])
*
*  map 함수 문법
*  callback : 새로운 배열의 요소를 생성하는 함수로 파라미터는 총 3가지임
*   currentValue : 현재 처리하고 있는 요소
*   index : 현재 처리하고 있는 요소의 index 값
*   array : 현재 처리하고 있는 원본 배열
* thisArg(선택 항목) : callback 함수 내부에서 사용할 this 레퍼런스
*/

/*
* key 값
* 배열을 랜더링 했을 때 어던 원소에 변동이 있었는지 알아내기 위해 사용함
* key값을 이용시 어떤 변화가 일어났는지 더 빠르게 알 수 있음
*
* key 설정
* key값을 설정할 때는 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정
* kery 값은 유일해야함
*/

/*
* 내용 추가하기
* 배열에 추가할 때는 concat함수를 사용함(push는 배열을 변경하지만 concat은 새로운 배열을 만듬) 
* 상태를 업데이트 할때는 기존 상태를 그대로 새로운 상태로 값을 섲렁 -> 불변성 유지 -> 최적화에 좋음
* onClick함수에서 새로운 항목을 추가할 떄 객체의 id값은 nextId를 사용하도록 함 -> nextID값을 1 올라가도록 설정
* 추가로 버튼이 클릭될때마다 input값의 없앰
*/

/*
* 내용 제거하기
* 불변성을 유지하면서 제거한다면 filter함수를 사용
* filter 함수를 사용을 한다면 배열을 특정조건을 만족하는 원소만 쉽게 분류 가능
*/

// (PenautGener === 'boy' ? 아조씨 : 아줌마)