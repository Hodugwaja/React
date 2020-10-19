import React from 'react';
import ColorContext from '../contexts/color'

const ColorBox = () => {
    return(
        <ColorContext.Consumer>
            {value => (
                <div 
                    style = {{
                        width: '164px', 
                        height: '164px', 
                        background : value.Color
                    }}
                />
            )}
        </ColorContext.Consumer>
    );
};
export default ColorBox;

/*
 *   Context 오브젝트에 포함된 React 컴포넌트인 Provider는 context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할을 합니다
 */