import React, { Component } from 'react';
class MyName extends Component{
    render(){
        return(
            <div>안녕하세요 저는 프로 유튜버 <b>{this.props.name}</b>입니다. 저는 독사과입니다. 놀이터에서 악마를 담당하고 있습니다. {this.props.name}{this.props.name}운터카운터각각독각별 100만 유튜버가 목표입니다. </div>
        );
    }
}

export default MyName;