import React, { useState } from 'react';

const IterationSample = () => {
    const[names, setNames] = useState([
        {id : 1, text : '눈사람'},
        {id : 2, text : '얼음'},
        {id : 3, text : '눈'},
        {id : 4, text : '바람'},
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

    const namesList = names.map(name => <li key = {name.id}>{name.text}</li>);
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


// (PenautGener === 'boy' ? 아조씨 : 아줌마)