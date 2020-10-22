import React, {Component} from 'react';

class History extends Component{
    handleGoBack = () => {
        this.props.history.goBack();
    };
    handleGoHome = () => {
        this.props.history.push('/');
    };
    render(){
        return(
            <div>
                <button onClick = {this.handleGoBack}>뒤로</button>
                <button onClick = {this.handleGoHome}>메이커집으로</button>
            </div>
        )
    }
}


export default History;