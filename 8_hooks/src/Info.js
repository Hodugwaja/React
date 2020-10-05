import React, { useEffect, useState } from 'react';

const Info = () => {
    const [name, setName] = useState(' ');
    const [nickname, setNickname] = useState(' ');
    useEffect(() => {
        console.log('렌더링이 완료되었습니다!')
        console.log({
            name,
            nickname
        })
    })
    const onChangename = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };
    return(
        <div>
            <div>
                <input value = {name} onChange = {onChangename}/>
                <input value = {nickname} onChange = {onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;

/* 
* useState 여러번 사용하기
* 관리할 상태를 여러개 만들면 된다
*/

/*
* useEffect
* 리엑트 컴포넌트가 렌더링 될때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
* 마운트 될때만 실행하려면 비어있는 배열을 넣으면 된다 console.log('렌더링이 완료되었습니다!',[])
* 특정값이 업데이트 될때만 실행시 componentDidUpdate(prevProps, prevState){ if(prevProps.value !==this.props.value){doSomething();}} 그리고 배열에 name을 넣기
*/

