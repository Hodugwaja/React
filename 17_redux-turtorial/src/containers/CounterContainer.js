import React from 'react';
import { connect } from 'react-redux';
import Counter from '../Components/Counter';
import { increase, decrease} from '../modules/counter';

const CounterContainer = ( {number, increase, decrease} ) => {
    return(
        <Counter number = {number} onIncrease = {increase} onDecrease = {decrease} />
    );
};

const mapStateToProps = state => ({
    number : 0
});
const mapDispatchToProps = dispatch => ({
    //임시함수
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    },
});

export default connect(
    state => ({
        number: state.Counter.number
    }),
    distpatch => ({
        mapStateToProps,
        mapDispatchToProps
    })
)(CounterContainer);


/* 
*   리덕스를 컴포넌트와 연동시 connect 함수(react-redux 제공)을 사용해야 한다
*   connect(mapStatetoProps, mapDispatchToProps)(연동할 컴포넌트)
*    또는
*   const makeContainer = connect(mapStateToProps, mapDispatchToProps)
*   makeContainer(컴포넌트)
*   이렇게 표현이 가능하다
*/