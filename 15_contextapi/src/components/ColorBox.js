import React, {useContext} from 'react';
import ColorContext from '../contexts/color'

const ColorBox = () => {
    const { state } = useContext(ColorContext);
    return(
        
        <>
        <div 
            style = {{
                width: '64px', 
                height: '64px', 
                background : state.color
            }}
        />
        
        <div 
            style = {{
                width: '32px', 
                height: '32px', 
                background : state.subcolor
            }}
        />
        </>
    );
};
export default ColorBox;

/*
 *   Context 오브젝트에 포함된 React 컴포넌트인 Provider는 context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할을 합니다
 */