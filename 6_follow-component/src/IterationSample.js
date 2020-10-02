import React from 'react';

const IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    const nameList = names.map(name => <li>{name}</li>);
    return <ul>{nameList}</ul>
}

/*
* arr.map(callback, [this.Arg])
*
* map 함수 문법
* callback : 새로운 배열의 요소를 생성하는 함수로 파라미터는 총 3가지임
*   currentValue : 현재 처리하고 있는 요소
*   index : 현재 처리하고 있는 요소의 index 값
*   array : 현재 처리하고 있는 원본 배열
* thisArg(선택 항목) : callback 함수 내부에서 사용할 this 레퍼런스
*/

export default IterationSample;