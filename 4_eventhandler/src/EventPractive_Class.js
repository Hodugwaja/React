import React, { Component } from 'react';

class EventPractice extends Component{
    state = {
        username : '',
        message : ''
    }
    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value // 안에 넣은 e.target.name이 키 값이 됨
        });
    };

    handleClick(e){
        alert(`${this.state.username} : ${this.state.message}`);
        this.setState({
            username : '',
            message: ''    
        });
    }
    
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    
    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type = "text" name = "username" placeholder = "사용자명"
                    value = {this.state.username}
                    onChange = {this.handleChange}
                />
                <input
                    type = "text" name = "message" placeholder= "무엇이든 말해보세요" 
                    value = {this.state.message}
                    onChange ={this.handleChange}
                    onKeyPress = {this.handleKeyPress}
                />
                <button onClick = {this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPractice;
