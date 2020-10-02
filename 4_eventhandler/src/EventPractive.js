import React, { useState } from 'react';

const EventPractice = () =>{
    const [form, setForm] = useState({
        username : '',
        message : ''
    });
    const {username, message} = form;
    const onChange = e => {
        const nextForm = {
            ...form, // 기존의 form 내용을 이 자리에서 복사함
            [e.target.name] : e.target.value /// 원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    }
    const onClick = () => {
        alert(`${username} : ${message}`);
        setForm({
            username : '',
            message : ''
        })
    };

    const onKeyPress = e => {
        if(e.key === 'Enter'){
            onClick();
        }
    };

    return(
        <div>
            <h1>이벤트 연습</h1>
            <input
                type = "text" name = "username" placeholder = "사용자명"
                value = {username}
                onChange = {onChange}
            />
            <input
                type = "text" name = "message" placeholder= "무엇이든 말해보세요" 
                value = {message}
                onChange ={onChange}
                onKeyPress = {onKeyPress}
            />
            <button onClick = {onClick}>확인</button>
        </div>
    );
};

export default EventPractice;

// 문자열 대신 객체로 대체
// onChange관련 함수를 여러 개 만드는 것도 좋지만 e.target.name 활용이 input이 더 많을 때 더 좋을 수 있음