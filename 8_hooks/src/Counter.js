import React, {useState} from 'react';

const Counter = () =>{
    const [value, setValue] = useState(0);

    return(
        <div>
            <p>현재 카운터 값은 <b>{value}</b> 입니다.</p>
            <button onClick = {() => setValue(value+1)}>+1</button>
            <button onClick = {() => setValue(value-1)}>-1</button>
        </div>
    )
}

export default Counter;


/* 
* Hooks
* 함수형 컴포넌트에서도 상태 관리르 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의 기능을 제공하는 역할
*/

/*
* useState
* 가장 기본적인 Hook이며 함수형 컴포넌트에서도 가변적인 형태를 지닐 수 있게 해줌
* const[value, setValue] = useState(0); : 함수의 파라미터에는 상태의 기본값을 넣어줌
* 
*/