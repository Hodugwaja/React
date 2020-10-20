import React, {createContext, useState} from 'react';

const ColorContext = createContext({
    state : {color : 'black', subcolor : 'red'},
    actions: {
        setColor: () => {},
        setSubcolor : () => {}
    }
});

const ColorProvider = ({children}) => {
    const [color, setColor] = useState('black'); //배열 비구조화 할당 문법
    const [subcolor, setSubcolor] = useState('red');
    const value = {
        state : {color, subcolor},
        actions: {setColor, setSubcolor}
    };
    return(
        <ColorContext.Provider value = {value}>{children}</ColorContext.Provider>
    )
}

// const colorConsumer = ColorContext.Consumer
const{Consumer : ColorConsumer} = ColorContext;

export { ColorProvider,  ColorConsumer};

export default ColorContext;
/*
 *프로젝트 내의 환경설정, 사용자 정보와 같은 전역적으로 필요한 상태 관리할때 사용
 *
 * 
 * 주로 리엑트 애플리케이션은 컴포넌트 값의 데이터를 props를 전달하기 때문에 주로 최상위 컴포넌트인 App의 state에 넣어서 관리 
 * 하지만 여러 컴포넌트를 거쳐야 한다는 단점이 있음 --> 리덕스와 같은 상태 관리 라이브러리를 사용하는 바업도 있음
 * 하지만 contextAPI를 사용하면 라이브러리를 사용을 안해도 된다
 */