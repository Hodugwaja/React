import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component{
    state = {
        password :  '',
        clicked: false,
        validated : false
    }
    handleChange = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated : this.state.password === "0000"
        });
        this.input.focus();
    }

    render(){
        return(
            <div>
                <input
                    ref = {(ref) => this.input = ref} // ref는 다음과 같이 콜백함수를 사용하는 방법으로 쓸 수 있다
                    type = "password"
                    value = {this.state.password}
                    onChange = {this.handleChange}
                    className = {this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick = {this.handleButtonClick}>검증하기</button>
            </div>  
        );
    }
}

export default ValidationSample;

// ref를 추가하게 된다면 같은 기능에 더 적은 코드를 사용할 수 있다